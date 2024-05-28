import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesDetailsComponent } from '../services-details/services-details.component';
@Component({
  selector: 'app-services-part',
  standalone: true,
  imports: [CommonModule, ServicesDetailsComponent],
  templateUrl: './services-part.component.html',
  styleUrl: './services-part.component.css',
})
export class ServicesPartComponent {}
