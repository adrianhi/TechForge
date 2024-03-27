import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { serviceData } from '@data/service-cards/servicesCards-data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service-cards',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.css',
})
export class ServiceCardsComponent {
  constructor(private router: Router) {}
  onContact(): void {
    this.router.navigate(['/contact']); // Navigate to the contact page
  }

  serviceDataItem = serviceData;
}
