import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleReferenceComponent } from './single-reference/single-reference.component';
import { Reference } from '../../interfaces/reference_interface/reference.interface';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule, SingleReferenceComponent, MatCardModule],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  references: Reference[] = [
    {
      name: 'Kyrylo Novikov',
      role: 'Join Team Member',
      text: 'I had the pleasure of working with Zeljko on the “Join” Project  , and the collaboration was truly smooth and professional.His dedication, precision, and teamwork greatly contributed to the quality of the final product.',
    },
    {
      name: 'André Zelmer',
      role: 'Join Team Member',
      text: "I worked with Zeljko on several projects. In the „Join“ project, he took over the area for managing tasks and delivered reliably. Technically very competent and absolutely uncomplicated as a person – that's exactly what you want in a team.",
    },
    {
      name: 'Stefan Krischan',
      role: 'Join Team Member',
      text: 'I collaborated with Zeljko on the  „Join“ project. His technical competence and strong team-oriented mindset consistently contributed to the success of our work.',
    },
  ];

  activeIndex = 0;

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.references.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.references.length) % this.references.length;
  }

  setIndex(i: number) {
    this.activeIndex = i;
  }
}
