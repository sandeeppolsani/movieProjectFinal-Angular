import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { decode } from 'punycode';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private jwtHelper:JwtHelperService,private http:HttpClient,private _route:Router) { }

  url="http://localhost:9602";
  decodedToken:any=undefined;
  isTokenValid()
  {
    
    if(localStorage.getItem("token") && !this.jwtHelper.isTokenExpired(localStorage.getItem("token")))
    {
      this.decodedToken=this.jwtHelper.decodeToken(localStorage.getItem("token"));
      return true;
    }

    if(localStorage.getItem("token"))
    {
      localStorage.removeItem("token")
    }


    this._route.navigate(["login"]);
    return false;
  }

  setToken(token:string)
  {
    localStorage.setItem("token",token);
  }

  getToken()
  {
    return localStorage.getItem("token")
  }

  authenticate(credentials)
  {
    this.http.post(this.url+"/authenticate",credentials).subscribe(data=>{
      let somedata:any=data;
      if(data)
      {
        this.setToken(somedata.jwt);
        let decoded=this.jwtHelper.decodeToken(somedata.jwt);
        if(decoded && decoded.isAdmin)
        {
          this._route.navigate(["admin/viewTheatre"]);
        }else
        {
          this._route.navigate([""]);
        }
     
      }
    },err=>{
      console.log(JSON.stringify(err));
    })
  }

  
public isAdmin()
{
  if(this.isTokenValid())
  {
    let decoded:any=this.jwtHelper.decodeToken(localStorage.getItem("token"));
    if(decoded.isAdmin)
    {
      return true;
    }
    this._route.navigate(["/"]);
    return false;
  }
  return false;
}

  
public isUser()
{
  if(this.isTokenValid())
  {
    let decoded:any=this.jwtHelper.decodeToken(localStorage.getItem("token"));
    if(decoded.isAdmin)
    {
      this._route.navigate(["/admin/viewTheatre"])
      return false;
    }
    return true;
  }
  return false;
}

public logout()
{
  if(localStorage.getItem("token"))
  {
    localStorage.removeItem("token");
    this._route.navigate(["/"])
  }
}

public isLoggedIn()
{

  if(!localStorage.getItem("token"))
  {
    return false;
  }
  return !this.jwtHelper.isTokenExpired(localStorage.getItem("token"));
}

public getUserid()
{
  if(this.isUser())
  {
    let decoded=this.jwtHelper.decodeToken(localStorage.getItem("token"))
    return decoded.userId
  }
  return undefined;
}

}

