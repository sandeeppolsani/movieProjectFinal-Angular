import { Component, OnInit } from '@angular/core';
import { AdminMovieService } from '../../services/admin-movie.service';
import { Movie } from '../../entities/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  mov:Movie=new Movie();
  constructor(private moservice:AdminMovieService) { }

  ngOnInit(): void {

  }

  createMovie():void
  {
    this.moservice.createNewMovie(this.mov).subscribe(data=>
      {
        alert("movie added");
      },
      error=>
      {
        console.log("erroor occured",error);
      }
    );
    

  }
}
