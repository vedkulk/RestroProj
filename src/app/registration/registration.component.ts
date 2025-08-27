import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: true, 
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    onSubmit(form: any) {
    console.log('Form Data:', form.value);
  }  
}
