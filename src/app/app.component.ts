import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { TicketService } from './manish/services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springAngular';

  tickets=undefined;
  constructor(private _authservice:AuthenticationService,private _route:Router)
  {
    
  }

  logout()
  {
    this._authservice.logout();
  }

  isLoggedIn()
  {
    return this._authservice.isLoggedIn();
  }


  gotologin()
  {
    this._route.navigate(["login"])
  }


}
