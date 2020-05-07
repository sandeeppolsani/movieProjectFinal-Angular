import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Screen } from './../entities/screen';
@Injectable({
  providedIn: 'root'
})
export class AdminScreenService {

  screens:Screen[]=[];
  constructor(private http:HttpClient) {}
 
  loaddate(id):Observable<any>         
  {
    let url="http://localhost:9601/screen/"+id;
 
    return this.http.get(url);
  }
  createNewScreen(screen:Screen):Observable<any>
 {
   let url="http://localhost:9601/screen/new";
   return this.http.post(url,screen,{responseType:'json'}); 
 }

 deleteScreen(id)
 {
  let url="http://localhost:9601/deleteScreen/"+id;
  return this.http.delete(url);
 }

}
