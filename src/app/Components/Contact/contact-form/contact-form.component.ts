import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [InputTextareaModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contactForm: FormGroup;

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
          },
          (error) => {
            console.error('Error occurred while fetching data:', error);
          }
        );
    }
  }
}
