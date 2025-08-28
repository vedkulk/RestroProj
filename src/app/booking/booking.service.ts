import { Injectable } from '@angular/core';
import { BookingRequest } from './models/booking-request';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  createBooking(bookingRequest : BookingRequest) : void {
    console.log(bookingRequest);
  }
}
