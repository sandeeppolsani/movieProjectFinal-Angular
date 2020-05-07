import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../service/payment.service';

@Component({
  selector: 'app-pay-result',
  templateUrl: './pay-result.component.html',
  styleUrls: ['./pay-result.component.css']
})
export class PayResultComponent implements OnInit {

  ticket:any=undefined;
  constructor(private _payService:PaymentService) {
    this.ticket=_payService.ticketDetails
   }

  ngOnInit(): void {
  }

}
