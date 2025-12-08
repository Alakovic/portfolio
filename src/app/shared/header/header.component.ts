import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatButtonToggleModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
