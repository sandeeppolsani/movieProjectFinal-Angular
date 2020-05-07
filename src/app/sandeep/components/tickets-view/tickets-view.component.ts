import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/manish/services/ticket.service';

@Component({
  selector: 'app-tickets-view',
  templateUrl: './tickets-view.component.html',
  styleUrls: ['./tickets-view.component.css']
})
export class TicketsViewComponent implements OnInit {


  tickets:any;
  constructor(private _authservice:AuthenticationService,private _route:Router,private ticketservice:TicketService)
  {
    
  }
  ngOnInit(): void {

    this.getTickets();

  }

  getTickets()
  {
    if(this._authservice.isUser())
    {
    this.ticketservice.getTickets(this._authservice.getUserid()).subscribe(data=>{
      this.tickets=data;
    },err=>{
      console.log(err);
    })
  }
  }




}
