import { Component, OnInit, Input } from '@angular/core';
import { AdminShowService } from '../../services/admin-show.service';
import { Show } from '../../entities/show';
import { AdminTheatreService } from '../../services/admin-theatre.service';
import { Theatre } from '../../entities/theatre';
import { Screen } from '../../entities/screen';
import { Movie } from '../../entities/movie';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {

  @Input("theatre") theatre:Theatre=undefined;
  @Input("screen") screen:Screen=undefined;
  movies:any=undefined;
  selectedmovie:Movie=undefined;
  sho:Show=new Show();
  constructor(private shoservice:AdminShowService,private theatreservice:AdminTheatreService) { }

  ngOnInit(): void {
    console.log(this.theatre,this.screen)

    this.theatreservice.getMyMovies(this.theatre.theatreId).subscribe(data=>{
      this.movies=data;
    },err=>{
      
    })

  }

  selectmovie(movie)
  {
    
    if(this.selectedmovie)
    {

      this.selectedmovie=undefined;
    
    }else
    {
      this.selectedmovie=movie;
    }
  }

  createShow():void
  {

    if(this.theatre!=undefined && this.screen!=undefined && this.selectedmovie!=undefined)
    {

      this.sho.theatreId=this.theatre.theatreId;
      this.sho.screenId=this.screen.screenId;
      this.sho.movieId=this.selectedmovie.movieId
      this. shoservice.createNewShow(this.sho).subscribe(data=>
        {
          alert("show added");
        },
        error=>
        {
          console.log("erroor occured",error);
        }
      );
    }

    

  }
}
