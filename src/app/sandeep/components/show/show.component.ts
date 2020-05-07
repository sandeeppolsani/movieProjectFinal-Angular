import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public show=undefined;
  public startTime:Date=undefined;
  public endTime:Date=undefined;
  
  constructor(private showService:ShowService) { 
    showService.getShow(8);
  }

  public getShow()
  {
    return this.show;
  }

  ngOnInit(): void {

    this.showService.getShowsubscription(8).subscribe(data=>{
      this.show=data;
      // this.startTime=Date.parse(this.show.showStartTime);
      // console.log(this.startTime.get)
    },err=>{
      console.log(err)
    })

  }

}
