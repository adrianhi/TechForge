import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ourTeamData } from '@app/Data/Home/our-team/our-team-data';
@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css',
})
export class OurTeamComponent {
  ourTeamData = ourTeamData;
  responsiveOptions: any[] = [
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1
    },   {
      breakpoint: '1099px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '110px',
      numVisible: 2,
      numScroll: 1
    }
  ];
  
}
