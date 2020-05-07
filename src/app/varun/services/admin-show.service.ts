import { Injectable } from '@angular/core';
import { Show } from '../entities/show';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminShowService {

  shows:Show[]=[];
  constructor(private http:HttpClient) {}
 
  loaddata():Observable<any>         
  {
    let url="http://localhost:9601/show";
 
    return this.http.get(url);
  }
  createNewShow(show:Show):Observable<any>
 {
   let url="http://localhost:9601/show/new";
   console.log("saving",show)
   return this.http.post(url,show,{responseType:'text'}); 
 }

 getActiveShows(screenId)
 {
  let url="http://localhost:9601/getShows/active/"+screenId;
  return this.http.get(url);
 }

 getAllShows(screenId)
 {
  let url="http://localhost:9601/getShows/"+screenId;
  return this.http.get(url);
 }
 deleteShow(id)
 {
  let url="http://localhost:9601/deleteShow/"+id;
  return this.http.delete(url);
 }

}
