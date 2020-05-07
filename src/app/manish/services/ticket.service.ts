import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url=environment.manishPort
  constructor(private http:HttpClient) { }

  getTickets(id)
  {
    return this.http.get(this.url+"/getTickets/"+id);
  }

}
