import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent {
   text: string[] = [
    'Frontend Developer',
    'Based in Koln',
    'Open to Work',
    'Available for remote work'
  ];
}
