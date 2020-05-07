import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private movieservice:MovieService,private _route:Router,private screenservice:ScreenService) { }

  public movies:any;
  private city:String="warangal";
  errMsg=undefined;

  public onSearch(form:NgForm)
  {
    if(form.value.cityName!="")
    {
      this.city=form.value.cityName;
      this.movieservice.searchMoviesByCity(form.value.cityName).subscribe(data=>{
        this.movies = data;
      },err=>{
        this.errMsg=err.error.message;
        this.errorTimeout()
      });
    }
  }

  errorTimeout()
  {
    setTimeout(() => {
      this.errMsg=undefined
    }, 3000);
  }


  public getScreens(id:Number)
  {
    this.screenservice.setcityName(this.city);
    this.screenservice.setmovieId(id)
    this._route.navigate(['/screen'])
  }

  ngOnInit(): void {

      this.movieservice.searchMoviesByCity(this.city).subscribe(data=>{
        this.movies= data;
      },err=>{
        console.error(err);
      });

  }

  

}
