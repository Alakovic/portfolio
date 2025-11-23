import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../interfaces/project_interface/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Join',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      img: 'assets/images/projects/join.png',
    },
    {
      name: 'Sharky',
      tech: ['HTML', 'CSS', 'JavaScript'],
      img: 'assets/images/projects/sharky.png',
    },
  ];

  currentImg: string = '';
  imgIndex: number = 0

  showImg(path: string,index:number) {
    this.currentImg = path;
     this.imgIndex = index;
  }

  hideImg() {
    this.currentImg = '';
  }
}
