import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Project } from '../../../interfaces/project_interface/project.interface';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent {
  @Input() project! : Project;

}
