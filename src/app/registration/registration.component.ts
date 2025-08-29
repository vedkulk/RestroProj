import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  private apiUrl = `${environment.api.user}`
  constructor(private http:HttpClient){}

  onSubmit(form: any) {
    console.log('Form Data:', form.value);
    this.http.post<any>(this.apiUrl, form.value).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);

        if (response && response._links && response._links.self && response._links.self.href) {
          const userUrl = response._links.self.href;
          const userId = userUrl.split('/').pop(); 
          localStorage.setItem('user_id', userId);
          console.log('Stored user_id:', userId);
        }

        alert('Registration successful!');
      },
      error: (error) => {
        console.error('Registration failed:', error);
        alert('Something went wrong!');
      }
    });
  }
}