import { Component, OnInit } from '@angular/core';
import { AdminTheatreService } from '../../services/admin-theatre.service';
import { Theatre } from '../../entities/theatre';

@Component({
  selector: 'app-view-theatre',
  templateUrl: './view-theatre.component.html',
  styleUrls: ['./view-theatre.component.css']
})
export class ViewTheatreComponent implements OnInit {

  selectedTheatre=undefined;
  optionSelected=undefined;


  constructor(private theservice:AdminTheatreService) { }

  theatres:Theatre[]=[];


  
  selectTheatre(id)
  {
    this.selectedTheatre=id;
  }

  viewScreens(theatre)
  {
    this.selectTheatre(theatre)
    this.optionSelected="viewScreen";
  }

  attachMovie(theatre)
  {
    this.selectTheatre(theatre)
    this.optionSelected="attachMovie";
  }


  deselectTheatre()
  {
    this.selectedTheatre=undefined;
  }

  delete(id)
  {
    this.theservice.deleteTheatre(id).subscribe(data=>{
      this.theservice.loaddata().subscribe(data=>
        {
          this.theatres=data;
        },
        error=>
        {
          console.log("erroor occured",error);
        }
        );
    },err=>{
      console.log(err)
    })
  }
 
  ngOnInit(): void {
       
     this.theservice.loaddata().subscribe(data=>
       {
         this.theatres=data;
       },
       error=>
       {
         console.log("erroor occured",error);
       }
       );
     
   }

}
