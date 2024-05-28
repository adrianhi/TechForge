import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    InputTextareaModule,
    ReactiveFormsModule,
    MessagesModule,
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private http: HttpClient) {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.http
        .post('https://localhost:7075/contacts', this.contactForm.value)
        .subscribe(
          (response) => {
            console.log('Response from server:', response);
            this.successMessage = 'Form submitted successfully!';
            this.errorMessage = '';
            this.contactForm.reset();
          },
          (error) => {
            console.error('Error occurred while fetching data:', error);
            this.errorMessage = 'Error occurred while submitting the form.';
            this.successMessage = '';
          }
        );
    }
  }
}
