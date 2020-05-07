import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url:String="http://localhost:9600";
  constructor(private http:HttpClient) { }

  public searchMoviesByCity(cityName:String)
  {
    return this.http.get(this.url+"/"+cityName)
  }

}
