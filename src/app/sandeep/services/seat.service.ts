import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  private showId:Number=14;
  private holdedSeats=undefined;
  
  constructor(private http:HttpClient,private _route:Router) {

   }
   private url:String="http://localhost:9600";

   public getSeats()
   {
     return this.http.get(this.url+"/show/"+this.showId+"/seats");
   }

   public setShowId(showId:Number)
   {
     this.showId=showId;
   }

   public getSeat(seatId:number)
   {
     return this.http.get(this.url+"/seat/"+seatId)
   }

   public holdSeats(seats:any)
   {
     
     this.http.patch(this.url+"/blockSeats",seats.map(seats=>seats.seatId)).subscribe(data=>{
      
      this.holdSeats=seats;  
      this._route.navigate(["booking"])
      
    },err=>{
       console.error(err)
     })



   }
 
   public getShowId()
   {
     return this.showId;
   }

   public getHoldedSeats()
   {
     return this.holdedSeats;
   }
 

}
