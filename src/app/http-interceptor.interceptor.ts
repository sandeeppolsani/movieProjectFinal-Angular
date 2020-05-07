import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private authservice:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token=this.authservice.getToken();
    if(token && this.authservice.isTokenValid())
    {
    request=request.clone({
      headers:request.headers.set('Authenticate',"Bearer "+token)
    })
    return next.handle(request);
    }else
    {
      return next.handle(request);
    }
  }
}
