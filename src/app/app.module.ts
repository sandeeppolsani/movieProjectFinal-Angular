import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreensComponent } from './sandeep/components/screens/screens.component';
import { SeatmapComponent } from './sandeep/components/seatmap/seatmap.component';
import { ShowComponent } from './sandeep/components/show/show.component';
import { LoginComponent } from './sandeep/components/login/login.component';
import { HomeComponent } from './sandeep/components/home/home.component';
import { MoviesComponent } from './sandeep/components/movies/movies.component';
import { BookingComponent } from './manish/components/booking/booking.component';
import { PaymentComponent } from './manish/components/payment/payment.component';
import { PayResultComponent } from './manish/components/pay-result/pay-result.component';
import { SignupComponent } from './rakesh/components/signup/signup.component';
import { ResetpasswordComponent } from './rakesh/components/resetpassword/resetpassword.component';
import { ProfileComponent } from './rakesh/components/profile/profile.component';
import { ScreenService } from './sandeep/services/screen.service';
import { SeatService } from './sandeep/services/seat.service';
import { ShowService } from './sandeep/services/show.service';


import { FormsModule} from '@angular/forms';



// Modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddMovieComponent } from './varun/components/add-movie/add-movie.component';
import { AdminMovieService } from './varun/services/admin-movie.service';
import { AdminScreenService } from './varun/services/admin-screen.service';
import { AdminShowService } from './varun/services/admin-show.service';
import { AdminTheatreService } from './varun/services/admin-theatre.service';
import { AdminHomeComponent } from './varun/components/admin-home/admin-home.component';
import { AddTheatreComponent } from './varun/components/add-theatre/add-theatre.component';
import { AddShowComponent } from './varun/components/add-show/add-show.component';
import { ViewMovieComponent } from './varun/components/view-movie/view-movie.component';
import { ViewScreenComponent } from './varun/components/view-screen/view-screen.component';
import { ViewShowComponent } from './varun/components/view-show/view-show.component';
import { ViewTheatreComponent } from './varun/components/view-theatre/view-theatre.component';
import { AddScreenComponent } from './varun/components/add-screen/add-screen.component';
import { AuthenticationService } from './authentication.service';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthguardGuard } from './guards/authguard.guard';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { BookingService } from './manish/service/booking.service';
import { PaymentService } from './manish/service/payment.service';
import { AdminGuard } from './guards/admin.guard';
import { UserserviceService } from './rakesh/service/userservice.service';
import { AttachmovieComponent } from './varun/components/attachmovie/attachmovie.component';
import { TicketService } from './manish/services/ticket.service';
import { TicketsViewComponent } from './sandeep/components/tickets-view/tickets-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreensComponent,
    SeatmapComponent,
    ShowComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    BookingComponent,
    PaymentComponent,
    PayResultComponent,
    SignupComponent,
    ResetpasswordComponent,
    ProfileComponent,
    AddMovieComponent,
    AdminHomeComponent,
    AddTheatreComponent,
    AddShowComponent,
    ViewMovieComponent,
    ViewScreenComponent,
    AddScreenComponent,
    ViewShowComponent,
    ViewTheatreComponent,
    AttachmovieComponent,
    TicketsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ScreenService,
    AuthenticationService,
    AuthguardGuard
    ,
    AdminGuard,
    TicketService,
    UserserviceService,
    BookingService,
    PaymentService,
    SeatService,
    ShowService,
    AdminMovieService,
    AdminScreenService,
    AdminShowService,
    AdminTheatreService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
