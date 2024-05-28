import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { objectivesData } from '@app/Data/Home/objectives/objectives';
@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.css',
})
export class ObjectivesComponent {
  objectItem = objectivesData;
}
