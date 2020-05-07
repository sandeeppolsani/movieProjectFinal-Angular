import { Injectable } from '@angular/core';
import { Movie } from '../entities/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMovieService {
  movies:Movie[]=[];
  constructor(private http:HttpClient) {}
 
  loaddate():Observable<any>         
  {
    let url="http://localhost:9601/movie";
 
    return this.http.get(url);
  }
  createNewMovie(movie:Movie):Observable<any>
 {
   let url="http://localhost:9601/movie/new";
   return this.http.post(url,movie,{responseType:'json'}); 
 }

 deleteMovie(id)
 {
  let url="http://localhost:9601/deleteMovie/"+id;
  return this.http.delete(url);
 }

}
