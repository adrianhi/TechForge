import { Component } from '@angular/core';
import { HeaderComponent } from '@app/Components/services/header/header.component';
import { ServicesPartComponent } from '@components/services/services-part/services-part.component';
import { NavbarComponent } from '@components/global/navbar/navbar.component';
import { FooterComponent } from '@components/global/footer/footer.component';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    ServicesPartComponent,
    FooterComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
