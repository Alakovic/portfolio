import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Technology } from '../../interfaces/technology_interface/technology.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, MatCardModule,TranslateModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})

export class TechnologiesComponent {
  technologies: Technology[] = [
    { name: 'HTML', path: 'assets/images/technologies/HTML.svg' },
    { name: 'CSS', path: 'assets/images/technologies/CSS.svg' },
    { name: 'JavaScript', path: 'assets/images/technologies/JavaScript.svg' },
    { name: 'Material Design', path: 'assets/images/technologies/Material Design.svg' },
    { name: 'TypeScript', path: 'assets/images/technologies/TypeScript.svg' },
    { name: 'Angular', path: 'assets/images/technologies/Angular.svg' },
    { name: 'Firebase', path: 'assets/images/technologies/Firebase.svg' },
    { name: 'Git', path: 'assets/images/technologies/Git.svg' },
    { name: 'REST-API', path: 'assets/images/technologies/Rest-Api.svg' },
    { name: 'Scrum', path: 'assets/images/technologies/Scrum.svg' },
    { name: 'Growth mindset', path: 'assets/images/technologies/GrowthMindset.svg' }
  ];
}
