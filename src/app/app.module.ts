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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
