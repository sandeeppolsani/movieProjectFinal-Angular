import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../entities/movie';
import { AdminTheatreService } from '../../services/admin-theatre.service';

@Component({
  selector: 'app-attachmovie',
  templateUrl: './attachmovie.component.html',
  styleUrls: ['./attachmovie.component.css']
})
export class AttachmovieComponent implements OnInit {
  @Input("theatreId") theatre;
  movies:any=undefined;

  constructor(private  _theatreservice:AdminTheatreService) { }

  attach(movie)
  {
    this._theatreservice.attachMovie(this.theatre.theatreId,movie).subscribe()
  }

  ngOnInit(): void {

    this._theatreservice.getMoviesInverse(this.theatre.theatreId).subscribe(data=>{
      this.movies=data;
    },err=>{
      console.log(err)
    })
    

  }

}
