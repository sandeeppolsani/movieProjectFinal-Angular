import { Component, OnInit } from '@angular/core';
import { AdminTheatreService } from '../../services/admin-theatre.service';
import { Theatre } from '../../entities/theatre';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css']
})
export class AddTheatreComponent implements OnInit {


  the:Theatre=new Theatre();
  constructor(private thservice:AdminTheatreService) { }

  ngOnInit(): void {

  }

  createTheatre():void
  {
    this.thservice.createNewTheatre(this.the).subscribe(data=>
      {
        alert("theatre added");
      },
      error=>
      {
        console.log("erroor occured",error);
      }
    );
    

  }

}
