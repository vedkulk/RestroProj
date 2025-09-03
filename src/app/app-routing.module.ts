import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';

const routes: Routes = [
  { path: '', component: RestaurantsListComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'booking', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
