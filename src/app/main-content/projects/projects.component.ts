import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../interfaces/project_interface/project.interface';
import { SingleProjectComponent } from './single-project/single-project.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects$ = this.translate.stream('PROJECTS.ITEMS');
  projects: Project[] = [];

  currentImg: string = '';
  imgIndex: number = 0;
  selectedProject: Project | null = null;

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
  ) {
    this.projects$.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  showImg(path: string, index: number) {
    this.currentImg = path;
    this.imgIndex = index;
  }

  hideImg() {
    this.currentImg = '';
  }

  openOverlay(p: Project) {
    this.selectedProject = p;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  closeOverlay() {
    this.selectedProject = null;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  nextProject() {
    if (!this.selectedProject) return;
    const currentIndex = this.projects.indexOf(this.selectedProject);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }
}
