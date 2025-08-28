import { Component } from '@angular/core';
import { BookingRequest } from './models/booking-request';
import { FormBuilder, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { RestaurantClass } from '../restaurants/restaurants-list/model/restaurantClass';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  ngOnInit() {
    this.selectedRestaurant = this.restService.getSelectedRestaurant();
    if (this.selectedRestaurant) {
      this.bookingDetails.patchValue({
        restaurant: this.selectedRestaurant.name  
      });
    }
  }

  selectedRestaurant?: RestaurantClass;
  bookingRequest!: BookingRequest;

  bookingDetails = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    restaurant: [{ value: '', disabled: true }],   
    bookingDate: ['', Validators.required],
    bookingTime: ['', Validators.required],
    headCount: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService, private restService: RestaurantsService) {}

  captureBookingDetails(): void {
    if (!this.selectedRestaurant) {
      alert("Please select a restaurant on restaurant list before booking.");
      return;
    }

    console.log("Button clicked!", this.bookingDetails.value);


    if (this.bookingDetails.valid) {
      this.bookingRequest = new BookingRequest();
      this.bookingRequest.email = this.bookingDetails.get('email')?.value || '';
      this.bookingRequest.bookingDate = this.bookingDetails.get('bookingDate')?.value || '';
      this.bookingRequest.bookingTime = this.bookingDetails.get('bookingTime')?.value || '';
      this.bookingRequest.headCount = this.bookingDetails.get('headCount')?.value || 1;

      this.bookingService.createBooking(this.bookingRequest);
    }
  }
}
