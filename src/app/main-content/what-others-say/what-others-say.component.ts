import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhatOthersSay } from '../../interfaces/others-say_interface/other-say.interface';
import { SingleWOSComponent } from './single-wos/single-wos.component';

@Component({
  selector: 'app-what-others-say',
  standalone: true,
  imports: [CommonModule, SingleWOSComponent],
  templateUrl: './what-others-say.component.html',
  styleUrls: ['./what-others-say.component.scss'],
})
export class WhatOthersSayComponent {
  whatOthersSay: WhatOthersSay[] = [
    {
      name: 'Kyrylo Novikov',
      role: 'Join Team Member',
      text: 'I had the pleasure of working with Zeljko on the “JOIN” Project  , and the collaboration was truly smooth and professional. He was responsible for the Board, where he excellently implemented the display and logic for moving tasks through all stages, from “To Do” to “Done.” His dedication, precision, and teamwork greatly contributed to the quality of the final product.',
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

  middleIndex = 0;

  ngOnInit() {
    this.middleIndex = Math.floor(this.whatOthersSay.length / 2);
  }

  prevSlide() {
    this.middleIndex =
      (this.middleIndex - 1 + this.whatOthersSay.length) %
      this.whatOthersSay.length;
  }

  nextSlide() {
    this.middleIndex = (this.middleIndex + 1) % this.whatOthersSay.length;
  }
}
