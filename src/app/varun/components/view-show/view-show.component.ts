import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../entities/show';
import { AdminShowService } from '../../services/admin-show.service';
import { Screen } from '../../entities/screen';

@Component({
  selector: 'app-view-show',
  templateUrl: './view-show.component.html',
  styleUrls: ['./view-show.component.css']
})
export class ViewShowComponent implements OnInit {

  constructor(private showservice:AdminShowService) { }

  shows:any=undefined;

  @Input("screen") screen:Screen;


  delete(id)
  {
    this.showservice.deleteShow(id).subscribe(data=>{
      this.showservice.loaddata().subscribe(data=>{
        this.shows=data;
      },err=>{
        console.log(err)
      })
    },err=>{
      console.log(err)
    })
  }


  getAllShows()
  {
    this.showservice.getAllShows(this.screen.screenId).subscribe(data=>
      {
        this.shows=data;
      },
      error=>
      {
        console.log("erroor occured",error);
      }
      );
  }

  getActiveShows()
  {
    this.showservice.getActiveShows(this.screen.screenId).subscribe(data=>
      {
        this.shows=data;
      },
      error=>
      {
        console.log("erroor occured",error);
      }
      );
  }
 
  ngOnInit(): void {
       

     
   }
   
}
