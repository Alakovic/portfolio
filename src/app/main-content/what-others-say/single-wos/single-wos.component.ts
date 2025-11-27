import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WhatOthersSay } from '../../../interfaces/others-say_interface/other-say.interface';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-single-wos',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './single-wos.component.html',
  styleUrls: ['./single-wos.component.scss'],
})
export class SingleWOSComponent {
  @Input() opinion!: WhatOthersSay;
}
