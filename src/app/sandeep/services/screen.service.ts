import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private http:HttpClient) {

   }
   private url:String="http://localhost:9600";
   private movieId:Number=undefined;
   private cityName:String=undefined;
   private screenId:Number=undefined;

   public getScreen()
   {
     return this.http.get(this.url+"/screen/"+this.screenId)
   }

   public getTheatreWiseShows()
   {
     return this.http.get(this.url+"/theatres/"+this.cityName+"/"+this.movieId)
   }

   public setmovieId(id:Number)
   {
     this.movieId=id;
   }

   public setScreenId(id:Number)
   {
     this.screenId=id;
   }

   public setcityName(city:String)
   {
     this.cityName=city;
   }

   public getscreenId():Number
   {
     return this.screenId;
   }

   public getmovieId():Number
   {
     return this.movieId;
   }

   public getcity():String
   {
     
     return this.cityName;
   }


}
