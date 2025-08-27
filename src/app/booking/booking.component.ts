import { Component } from '@angular/core';
import { BookingRequest } from './models/booking-request';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookingService } from './booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingRequest !: BookingRequest;

  bookingDetails = this.formBuilder.group({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    restaurant: new FormControl<string>('',Validators.required),
    bookingDate: new FormControl<string>('', Validators.required),
    bookingTime: new FormControl<string>('', Validators.maxLength(4)),
    headCount: new FormControl<number>(1)
  });

  constructor(private formBuilder : FormBuilder, private bookingService : BookingService){}

  captureBookingDetails() : void {
    console.log(this.bookingDetails);
    if(this.bookingDetails.valid){  
      this.bookingRequest = new BookingRequest();
      this.bookingRequest.email = this.bookingDetails.value.email == null ? '' : this.bookingDetails.value.email; 
      this.bookingRequest.bookingDate = this.bookingDetails.value.bookingDate == null ? '' : this.bookingDetails.value.bookingDate;
      this.bookingRequest.restaurant = this.bookingDetails.value.restaurant == null ? '' : this.bookingDetails.value.restaurant;
      this.bookingRequest.bookingTime = this.bookingDetails.value['bookingTime'] == null ? '' : this.bookingDetails.value["bookingTime"];
      //this.bookingRequest.headCount = this.bookingDetails.value.headCount;
      this.bookingService.createBooking(this.bookingRequest);
    }
  }
}