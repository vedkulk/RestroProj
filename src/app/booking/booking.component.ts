import { Component, OnInit } from '@angular/core';
import { BookingRequest } from './models/booking-request';
import { FormBuilder, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { RestaurantClass } from '../restaurants/restaurants-list/model/restaurantClass';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { RegistrationService } from '../registration/registration.service'; // ✅ import service

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  selectedRestaurant?: RestaurantClass;
  bookingRequest!: BookingRequest;
  userId!: number;

  bookingDetails = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    restaurant: [{ value: '', disabled: true }],
    bookingDate: ['', Validators.required],
    bookingTime: ['', Validators.required],
    headCount: [1, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private restService: RestaurantsService,
    private registrationService: RegistrationService
  ) {}

  ngOnInit() {
    this.userId = this.registrationService.getUserId();
    console.log('Logged in user ID:', this.userId);
    this.selectedRestaurant = this.restService.getSelectedRestaurant();

    if (this.selectedRestaurant) {
      this.bookingDetails.patchValue({
        restaurant: this.selectedRestaurant.name,
      });
    }
  }

  captureBookingDetails(): void {
    console.log('User id', this.userId);
    console.log('Form submitted:', this.bookingDetails.value);
    if (!this.selectedRestaurant) {
      alert('Please select a restaurant before booking.');
      return;
    }

    if (this.bookingDetails.valid) {
      this.bookingRequest = new BookingRequest();
      this.bookingRequest.date =
        this.bookingDetails.get('bookingDate')?.value || '';
      this.bookingRequest.people =
        this.bookingDetails.get('headCount')?.value || 1;
      this.bookingRequest.userId = this.userId;
      this.bookingRequest.restId = this.selectedRestaurant.id;
      this.bookingService.createBooking(this.bookingRequest);
    }
  }
}
