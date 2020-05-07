import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient,private _route:Router) { }
  url=environment.rakeshPort;

  signup(user)
  {
    this.http.post(this.url+"/signup",user).subscribe(data=>{
      if(data)
      {
        this._route.navigate(["login"]);
      }
    },err=>{
      
    })
  }

}
