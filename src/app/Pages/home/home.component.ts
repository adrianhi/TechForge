import { Component } from '@angular/core';
import { CarouselComponent } from '@components/home/carousel/carousel.component';
import { NavbarComponent } from '@components/global/navbar/navbar.component';
import { ServiceCardsComponent } from '@components/home/service-cards/service-cards.component';
import { FooterComponent } from '@components/global/footer/footer.component';
import { ObjectivesComponent } from '@components/home/objectives/objectives.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CarouselComponent,
    ServiceCardsComponent,
    FooterComponent,
    ObjectivesComponent,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}
  openWhatsApp() {
    window.open('https://wa.me/whatsapp-number', '_blank');
  }
}
