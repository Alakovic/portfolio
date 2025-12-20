import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule,AsyncPipe],
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent {

   text$ = this.translate.stream('MARQUEE.ITEMS');

  constructor(private translate: TranslateService) {}

  
}
