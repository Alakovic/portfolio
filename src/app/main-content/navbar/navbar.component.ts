import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatButtonToggleModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
