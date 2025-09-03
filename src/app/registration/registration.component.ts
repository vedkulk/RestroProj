import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './model/registration-request';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private registerService: RegistrationService) {}

  user = new User();

  onSubmit(form: any) {
    if (!form.valid) {
      alert('Please fill all required fields correctly before submitting.');
      return;
    } else {
      this.user.name = form.value.name;
      this.user.email = form.value.email;
      this.user.password = form.value.password;
      this.user.phoneNumber = Number(form.value.phoneNumber);
      console.log('User Data:', this.user);
      this.registerService.createRegistration(this.user);
    }
  }
}
