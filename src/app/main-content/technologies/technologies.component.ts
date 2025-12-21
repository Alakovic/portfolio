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
    { name: 'HTML', path: 'assets/images/technologies/html.png' },
    { name: 'CSS', path: 'assets/images/technologies/css.png' },
    { name: 'JavaScript', path: 'assets/images/technologies/js.png' },
    { name: 'Material Design', path: 'assets/images/technologies/mat_design.png' },
    { name: 'TypeScript', path: 'assets/images/technologies/ts.png' },
    { name: 'Angular', path: 'assets/images/technologies/angular.png' },
    { name: 'Firebase', path: 'assets/images/technologies/firebase.png' },
    { name: 'Git', path: 'assets/images/technologies/git.png' },
    { name: 'REST-API', path: 'assets/images/technologies/restApi.png' },
    { name: 'Scrum', path: 'assets/images/technologies/scrum.png' },
    { name: 'Growth mindset', path: 'assets/images/technologies/growth.png' }
  ];
}
