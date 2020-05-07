import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthenticationService) {

   }


   login(form:NgForm){
      this.authservice.authenticate(form.form.value);
   }

  ngOnInit(): void {
  
  }

}
