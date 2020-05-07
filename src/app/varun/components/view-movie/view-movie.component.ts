import { Component, OnInit } from '@angular/core';
import { AdminMovieService } from '../../services/admin-movie.service';
import { Movie } from '../../entities/movie';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  constructor(private moservice:AdminMovieService) { }

  movies:Movie[]=[];

  loadData(){
    this.moservice.loaddate().subscribe(data=>
      {
        this.movies=data;
      },
      error=>
      {
        console.log("erroor occured",error);
      }
      );     this.moservice.loaddate().subscribe(data=>
         {
           this.movies=data;
         },
         error=>
         {
           console.log("erroor occured",error);
         }
         );
  }
  
  ngOnInit(): void {
       
    this.loadData()
     
   }

   deletemovie(id)
   {
      this.moservice.deleteMovie(id).subscribe(data=>{
        this.loadData();
      },err=>{
        console.log(err.error.message);
      })
   }

}
