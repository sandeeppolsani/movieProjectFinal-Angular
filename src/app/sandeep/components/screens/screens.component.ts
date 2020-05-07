import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../services/screen.service';
import { ShowService } from '../../services/show.service';
import { Router } from '@angular/router';
import { SeatService } from '../../services/seat.service';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {

  public theatres:any;
  public shows:any=[];
  private movieid:Number=undefined;
  private cityName:String=undefined;
  
  
  constructor(private _screenservice:ScreenService,
    private _seatservice:SeatService,
    private _route:Router) 
    { 


    }


  public getShow(show)
  {

  }

  public selectShow(show)
  {
    this._seatservice.setShowId(show.showId);
    this._screenservice.setScreenId(show.screenId)
    this._route.navigate(['seatmap'])
  }

  ngOnInit(): void {


    // Subscription to the get request of the theatre data

    this._screenservice.getTheatreWiseShows().subscribe(data=>{
      this.theatres=data
    },err=>{
      console.log(err)
    })

    {

      // Assigns data to the local variables form Service

      this.movieid=this._screenservice.getmovieId()
      this.cityName=this._screenservice.getcity()

      // Checks the data sent by hompage if not present it will be redirected to the homepage

      if (this.movieid===undefined || this.cityName===undefined) {
        this._route.navigate([''])
      }else
      {
        // This fetches the theatrewise show details
        this._screenservice.getTheatreWiseShows().subscribe(data=>{
          this.theatres=data
          console.log(this.theatres)
        },err=>{
          console.log(err)
        })
      }
    }


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._screenservice.setmovieId(undefined)
    this._screenservice.setcityName(undefined)
    
  }

}
