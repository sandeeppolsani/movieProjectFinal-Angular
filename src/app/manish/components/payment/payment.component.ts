import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../service/payment.service';
import { PaymentType } from '../../enum/payment-type.enum';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  result="";
  payment=undefined;
  paymentType:PaymentType=undefined;

  constructor(private _payService:PaymentService,private _location:Location) {
  
 
  }

  makePayment()
  {
    this.payment=this._payService.getPayment()
    this.payment.paymentType=PaymentType.DEBIT_CARD
    this._payService.makePayment(this.payment);
  }

  ngOnInit(): void {

    if(this._payService.payment==undefined)
    {
      this._location.back()
    }

  }

}
