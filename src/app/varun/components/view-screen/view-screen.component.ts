import { Component, OnInit, Input } from '@angular/core';
import { AdminScreenService } from '../../services/admin-screen.service';
import { Screen } from '../../entities/screen';

@Component({
  selector: 'app-view-screen',
  templateUrl: './view-screen.component.html',
  styleUrls: ['./view-screen.component.css']
})
export class ViewScreenComponent implements OnInit {


  selectedScreen:any=undefined;
  @Input("theatreId") theatre;
  screens:Screen[]=[];

  active="viewScreen";
  constructor(private scrservice:AdminScreenService) { 


  }

  selectScreenActivateViewShow(scr)
  {
    this.viewShowActive()
    this.selectScreen(scr);
  }

  selectScreenActivateAddShow(scr)
  {
    this.addShowActive()
    this.selectScreen(scr);
  }

  addShowActive()
  {
    this.active="addShow";
  }

  addScreenActive()
  {
    this.active="addScreen";
  }

  viewShowActive()
  {
    this.active="viewShow";
  }

  viewScreenActive()
  {
    this.active="viewScreen";
  }
  
  delete(id)
  {
    this.scrservice.deleteScreen(id).subscribe(data=>{
      this.getScreensofTheatre()
    })
  }

  selectScreen(screen)
  {
    // this.toggleShowScreen();
    this.selectedScreen=screen;
  }




  getScreensofTheatre()
  {


    if(this.theatre!=undefined)
    {
      this.scrservice.loaddate(this.theatre.theatreId).subscribe(data=>
        {
          this.screens=data;
        },
        error=>
        {
          console.log("error occured",error);
        }
        );
    }

  }


 
 
  ngOnInit(): void {
       
    this.getScreensofTheatre();
     
   }



}
