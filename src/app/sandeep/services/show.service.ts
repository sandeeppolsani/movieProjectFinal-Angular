import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http:HttpClient) { }
  private url:String="http://localhost:9600";

  public getShowsubscription(id:Number)
  {
    return this.http.get(this.url+"/show/"+id);
  }

  private screenId:Number=undefined;

  public getShow(id:Number)
  {
    let show=undefined;
    this.http.get(this.url+"/show/"+id).subscribe(data=>{
      show=data;
    },err=>{
      console.log(err);
    });
    return show;
  }

  ngOnDestroy(): void {
    

    
  }




  
}
