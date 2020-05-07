import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _userservice:UserserviceService) { }

  ngOnInit(): void {
  }

  errMsg=undefined;
  result=undefined;

  public submit(form:NgForm)
  {
    console.log(form.form.value)

    if(form.form.value.password===form.form.value.confirmPassword)
    {
      this._userservice.signup(form.form.value);
    }else
    {
      this.errMsg="Passwords anre not matching please ensure that";
    }
  }

}
