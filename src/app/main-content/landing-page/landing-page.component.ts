import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MarqueeComponent } from './marquee/marquee.component';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule, MarqueeComponent,HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

}
