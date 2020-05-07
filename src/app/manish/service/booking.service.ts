import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SeatService } from 'src/app/sandeep/services/seat.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService implements OnDestroy
{

  constructor(private http:HttpClient,private _seatservice:SeatService,
    private _route:Router,private _authservice:AuthenticationService) { }
  url=environment.manishPort;
  Booking:any=undefined;
  currentTimeoutId=undefined;

  

  private getSeatsFromseatService(seats)
  {
    for (let index = 0; index < seats.length; index++) {
      const element = this._seatservice.getSeat(seats[index].seatId);
      seats[index]=element;
    }
    return seats;

  }

  public expireBooking()
  {
    this.http.post(this.url+"/expire",this.Booking).subscribe(data=>{
      
      this._route.navigate(["home"])

    },err=>{
      console.log(err.errMsg)
    })
  }

  timeout(){
    return setTimeout(() => {
    console.log("hai timeout set")
    if(this.Booking!=undefined)
    {

      console.log("expired")
      this.expireBooking()
    
    }
    this.currentTimeoutId=undefined;
  }, 1000*10*60);
}

  clearBookingTimeOut(){
    
    clearTimeout(this.currentTimeoutId);
    this.Booking=undefined;
    this.currentTimeoutId=undefined

  }

  bookSeats(seats){
    
    let id=this._authservice.getUserid()
    if(id!=undefined)
    {
    this.http.post(this.url+"/book/"+id,seats).subscribe(data=>{

      if(this.Booking!=undefined)
      {
        this.expireBooking();
        this.clearBookingTimeOut();
        this.Booking=undefined
      }

      this.Booking=data;
      this.currentTimeoutId=this.timeout()
      this._route.navigate(["/booking"])

    },err=>{
      console.log(err.errMsg);
    });
  }
  else{
    this._route.navigate(["/login"])
  }

  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.Booking!=null)
    {
      this.clearBookingTimeOut()
      this.expireBooking();
      
    }

  }

  
}
