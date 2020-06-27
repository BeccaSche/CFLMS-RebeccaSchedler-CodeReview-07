import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:"", component: HomeComponent,
},{
    path: "blog", component: BlogComponent,
},{
  path: "booking", component: BookingComponent,
},{
  path: 'offers/:offerId', component: BookingDetailsComponent
},{
  path: 'cart', component: CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
