import { Injectable } from '@angular/core';
import { BookingRequest } from './models/booking-request';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = `${environment.backendURL}${environment.api.bookings}/create`;
  constructor(private http: HttpClient, private router: Router) {}

  createBooking(bookingRequest: BookingRequest): void {
    console.log('Booking payload:', bookingRequest);

    this.http
      .post(this.apiUrl, bookingRequest, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          console.log('Booking response:', response);
          alert(response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Booking failed:', error);
          alert('Booking failed');
          this.router.navigate(['/']);
        },
      });
  }
}
