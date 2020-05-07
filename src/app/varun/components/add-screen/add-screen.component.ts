import { Component, OnInit, Input, Output } from '@angular/core';
import { AdminScreenService } from '../../services/admin-screen.service';

import {Screen} from '../../entities/screen';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.css']
})
export class AddScreenComponent implements OnInit {

  @Input("theatre") theatre=undefined;
  scr:Screen=new Screen();
  successMsg=undefined;
  errMsg=undefined;
  constructor(private scrservice:AdminScreenService) { }

  ngOnInit(): void {
    this.successMsg=undefined;
    this.errMsg=undefined;
  }


  createScreen():void
  {
    this.scr.theatreId=this.theatre.theatreId;
    this.scr.theatre=this.theatre;
    this.scrservice.createNewScreen(this.scr).subscribe(data=>
      {
        this.scr=new Screen();
      },
      error=>
      {
      }
    );
    

  }
}
