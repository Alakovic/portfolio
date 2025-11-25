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
      id:'01',
      name: 'Join',
      tech:[
        {name:'HTML', image:'assets/images/tech_overlay/html_overlay.png'},
        {name:'CSS', image:'assets/images/tech_overlay/css_overlay.png'},
        {name:'JavScript', image:'assets/images/tech_overlay/js_overlay.png'},
        {name:'Firebase', image:'assets/images/tech_overlay/firebase_overlay.png'}
      ],
      img: 'assets/images/projects/join.png',
      description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions,assign users and categories.',
      github:'https://github.com/Alakovic/join_v2',
      demo:'https://zeljko-alakovic.developerakademie.net/join_v2/'
    },
    {
      id:'02',
      name: 'Sharky',
      tech: [
        {name:'HTML',  image:'assets/images/tech_overlay/html_overlay.png'},
        {name:'CSS', image:'assets/images/tech_overlay/css_overlay.png'},
        {name:'JavaScript',  image:'assets/images/tech_overlay/js_overlay.png'},
      ],
      img: 'assets/images/projects/sharky.png',
      description:'Game based on object-oriented approach.Help Sharky to get trough various enemies , find all coins and poisoned elixir to fight against the big crazy shark',
      github:'https://github.com/Alakovic/Sharky---THE-GAME',
      demo:'https://zeljko-alakovic.developerakademie.net/Sharky---THE-GAME/'
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
