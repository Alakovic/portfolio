import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MarqueeComponent } from './marquee/marquee.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule, MarqueeComponent,TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

}
