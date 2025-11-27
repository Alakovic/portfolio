import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { WhatOthersSayComponent } from './what-others-say/what-others-say.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,LandingPageComponent,AboutMeComponent,TechnologiesComponent,ProjectsComponent,WhatOthersSayComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
