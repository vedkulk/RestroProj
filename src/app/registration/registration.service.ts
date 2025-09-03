import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './model/registration-request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private userId: number = 0;

  private apiUrl = `${environment.backendURL}${environment.api.register}/create`;

  constructor(private http: HttpClient, private router: Router) {}

  createRegistration(user: any) {
    this.http
      .post<User>(this.apiUrl, user, { responseType: 'json' })
      .subscribe({
        next: (response) => {
          alert('User registered!');
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Registration failed:', error);
          alert('Something went wrong!');
        },
      });
  }
  setUserId(userId: number): void {
    this.userId = userId;
  }
  getUserId(): number {
    return this.userId;
  }
}
