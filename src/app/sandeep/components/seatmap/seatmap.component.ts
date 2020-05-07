import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../services/screen.service';
import { SeatService } from '../../services/seat.service';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/manish/service/booking.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-seatmap',
  templateUrl: './seatmap.component.html',
  styleUrls: ['./seatmap.component.css']
})
export class SeatmapComponent implements OnInit {

  public screen:any;
  public seats:any=[];
  public selectedSeats=[];
  private seatArray:any=[];
  public price=0;
  private show=undefined;

  constructor(private _screenservice:ScreenService,
    private _seatservice:SeatService,
    private _bookservice:BookingService,
    private _route:Router) {

   }


   // This method selects the seats

   selectSeat(seat)
   {
     if(seat.seatStatus!='AVAILABLE')
     {
       return;
     }
      if(this.selectedSeats.indexOf(seat)<0)
      {
        this.price+=seat.seatPrice;
        this.selectedSeats.push(seat);
      }
      else
      {
        let index=this.selectedSeats.indexOf(seat);
        this.selectedSeats.splice(index,1);
        this.price-=seat.seatPrice;
      }
   }

   // checks weather the seat is selected by the user
   isSelected(seat)
   {
     if(this.selectedSeats.indexOf(seat)<0)
     {
       return false;
     }
     return true;
   }



   //This method coverts 1d array to 2d array
   makeseats(seats,screen)
   {
     this.show=seats[0].show
    this.seats=[];
    for (let i = 0; i < screen.hallHeight; i++) {
        this.seats.push([]);
      for (let j = 0; j < screen.hallWidth; j++) {

        this.seats[i].push(seats[(i*this.screen.hallWidth)+j]);
        
      }
    }
   }



   public bookSeats()
   {

    if(this.selectedSeats.indexOf(this.seatArray[0])>=0)
    {
     this._bookservice.bookSeats(this.selectedSeats)
    }else
    {
      console.log(this.selectedSeats)
      if(this.selectedSeats.length>0)
      {
        this.selectedSeats[0].show=this.show
        this._bookservice.bookSeats(this.selectedSeats)
      }
    }
   }

  ngOnInit(): void {


    // This block checks weather there is any datain in service if not it will simply redirect to home
    {
      if(this._screenservice.getscreenId()===undefined || this._seatservice.getShowId()===undefined)
      {
          this._route.navigate([""])
      }

    }

    this._screenservice.getScreen().subscribe(data=>{
      if(!data)
      {
        return;
      }
      this.screen=data
      this._seatservice.getSeats().subscribe(data2=>{
        this.makeseats(data2,this.screen);
        this.seatArray=data2;
      });
      
    },err=>{
      console.log(err);
    })

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._screenservice.setScreenId(undefined)
    this._seatservice.setShowId(undefined)
  }



}
