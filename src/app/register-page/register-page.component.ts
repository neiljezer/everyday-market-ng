import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  userForms: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    dateOfBirth: new FormControl('', Validators.required),
    streetAddress: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    terms: new FormControl(false, Validators.requiredTrue)  
  });
  router: any;

  
  onSaveUser() {
    if (this.userForms.valid) {
      const formData = this.userForms.value;
      console.log('Form Data:', formData);
      alert('Form submitted successfully');

      this.router.navigate(['/products']);
    } else {
      alert('Form is invalid. Please try again.');
      this.userForms.markAllAsTouched();
    }
  }
}