import { Component } from '@angular/core';
import { NavbarComponent } from '@components/global/navbar/navbar.component';
import { ContactFormComponent } from '@components/Contact/contact-form/contact-form.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
