import { CommonModule  } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Reference } from '../../../interfaces/reference_interface/reference.interface';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-single-reference',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './single-reference.component.html',
  styleUrls: ['./single-reference.component.scss']
})
export class SingleReferenceComponent {
  @Input() reference!:Reference;

}
