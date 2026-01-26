import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FooterComponent,HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit():void{
    AOS.init();
  }

}
