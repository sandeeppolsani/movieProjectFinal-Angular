import { Component, OnInit } from '@angular/core';
import { SeatService } from 'src/app/sandeep/services/seat.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../../../environments/environment';
import { BookingService } from '../../service/booking.service';
import { PaymentService } from '../../service/payment.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public bookingDetails:any=undefined;

  constructor(private _seatservice:SeatService,private bookingservice:BookingService,private _route:Router,private _paymentservice:PaymentService,private _bookingService:BookingService) { 

    if(this._bookingService.Booking!=undefined)
    {
      this.bookingDetails=this._bookingService.Booking;
    }
    console.log(this.bookingDetails)

  }

  confirmBooking()
  {
    this._paymentservice.generatePayment(this.bookingDetails)
      

  }

  ngOnInit(): void {

    if(this.bookingservice.Booking==undefined)
    {
      this._route.navigate([""])
    }
    
  }




}
