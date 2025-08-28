import { Component } from '@angular/core';
import { BookingRequest } from './models/booking-request';
import { FormBuilder, Validators } from '@angular/forms';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingRequest!: BookingRequest;
  RestaurantName = "Hello";

  bookingDetails = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    restaurant: [{ value: this.RestaurantName, disabled: true }],   
    bookingDate: ['', Validators.required],
    bookingTime: ['', Validators.required],
    headCount: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService) {}

  captureBookingDetails(): void {
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
