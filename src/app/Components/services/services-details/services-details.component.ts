import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import services from '@data/Service/service-data';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [CommonModule, ImageModule],
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.css',
})
export class ServicesDetailsComponent {
  servicesItem = services;
}
