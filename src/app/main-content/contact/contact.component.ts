import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  contactData = {
    name: "",
    email: "",
    message: "",
    agree: false ,
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && this.contactData.agree)
    console.log(this.contactData);
    
  }
}
