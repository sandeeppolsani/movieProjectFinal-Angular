import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreensComponent } from './sandeep/components/screens/screens.component';
import { ShowComponent } from './sandeep/components/show/show.component';
import { SeatmapComponent } from './sandeep/components/seatmap/seatmap.component';
import { MoviesComponent } from './sandeep/components/movies/movies.component';
import { LoginComponent } from './sandeep/components/login/login.component';
import { HomeComponent } from './sandeep/components/home/home.component';
import { BookingComponent } from './manish/components/booking/booking.component';
import { PaymentComponent } from './manish/components/payment/payment.component';
import { PayResultComponent } from './manish/components/pay-result/pay-result.component';
import { AdminHomeComponent } from './varun/components/admin-home/admin-home.component';
import { AddMovieComponent } from './varun/components/add-movie/add-movie.component';
import { ViewMovieComponent } from './varun/components/view-movie/view-movie.component';
import { ViewShowComponent } from './varun/components/view-show/view-show.component';
import { ViewScreenComponent } from './varun/components/view-screen/view-screen.component';
import { ViewTheatreComponent } from './varun/components/view-theatre/view-theatre.component';
import { AddScreenComponent } from './varun/components/add-screen/add-screen.component';
import { AddShowComponent } from './varun/components/add-show/add-show.component';
import { AddTheatreComponent } from './varun/components/add-theatre/add-theatre.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { AdminGuard } from './guards/admin.guard';
import { SignupComponent } from './rakesh/components/signup/signup.component';


const routes: Routes = [
  {
    path:'admin',
    component:AdminHomeComponent,
    canActivate:[AdminGuard],
    children:[{path:'viewMovie',component:ViewMovieComponent},
    {path:'viewTheatre',component:ViewTheatreComponent},
    {path:'viewScreen',component:ViewScreenComponent},
    {path:'viewShow',component:ViewShowComponent},
    {path:'addMovie',component:AddMovieComponent},
    {path:'addTheatre',component:AddTheatreComponent},
    {path:'addScreen',component:AddScreenComponent},
    {path:'addShow',component:AddShowComponent}]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"screen",
    component:ScreensComponent
  },
  {
    path:"show",
    component:ShowComponent
  },
  {
    path:'seatmap',
    component:SeatmapComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'booking',
    component:BookingComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'payment',
    component:PaymentComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'payResult',
    component:PayResultComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'**',
    component:HomeComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
