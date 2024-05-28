import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { carouselData } from '@app/Data/Home/Carousel/carouselData';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  carouselItem = carouselData;
}
