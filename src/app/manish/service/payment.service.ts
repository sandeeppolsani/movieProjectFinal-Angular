import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BookingService } from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payment:any=undefined;
  ticketDetails:any=undefined;
  url=environment.manishPort;
  paymentResult;

  constructor(private _http:HttpClient,private _route:Router,private _bookingService:BookingService) { }

  generatePayment(booking)
  {
     this._http.post(this.url+"/confirmBooking",booking).subscribe(data=>{
        this.payment=data;
        if(this.payment!=undefined)
        {
          this._route.navigate(["/payment"]) 
        }
      },err=>{
       console.log("confirm booking payment return err");
     })
  }

  getPayment()
  {
    return this.payment;
  }

  makePayment(payment)
  {
    console.log(payment,payment)
    this._http.post(this.url+"/makePayment",payment).subscribe(data=>{
      if(data)
      {
        this.ticketDetails=data;
        this._bookingService.Booking=undefined
        console.log(this.ticketDetails)
        this.payment=undefined;
        this._route.navigate(["/payResult"]);
      }
    },err=>{

      this._bookingService.expireBooking();
      this.payment=undefined;
      this._route.navigate(["/payResult"]);
      return err;
    
    })


  }

}
