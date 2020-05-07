import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theatre } from '../entities/theatre';
import { Observable } from 'rxjs';
import { Movie } from '../entities/movie';

@Injectable({
  providedIn: 'root'
})
export class AdminTheatreService {

  theatres:Theatre[]=[];
  constructor(private http:HttpClient) {}
 
  loaddata():Observable<any>         
  {
    let url="http://localhost:9601/theatre";
 
    return this.http.get(url);
  }
  createNewTheatre(theatre:Theatre):Observable<any>
 {
   let url="http://localhost:9601/theatre/new";
   return this.http.post(url,theatre,{responseType:'text'}); 
 }
 
 getMyMovies(Id:number){
  let url="http://localhost:9601/getMovies/"+Id;
  return this.http.get(url)
 }

 getMoviesInverse(id:number)
 {
  let url="http://localhost:9601/getMoviesInverse/"+id;
  return this.http.get(url)
 }

 attachMovie(id:number,movie:Movie)
 {
  let url="http://localhost:9601/attachMovie/"+id;
  return this.http.put(url,movie);
}
deleteTheatre(id)
{
 let url="http://localhost:9601/deleteTheatre/"+id;
 return this.http.delete(url);
}
}
