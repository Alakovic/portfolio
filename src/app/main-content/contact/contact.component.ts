import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})

export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    agree: false,
  };

  successMessage = false;
  
  onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      this.http.post(
        'https://zeljko-alakovic.de/api/sendMail.php',
        this.contactData
      ).subscribe({
        next: () => {
          this.successMessage = true;
          ngForm.resetForm();

          // auto-hide after 4 seconds
          setTimeout(() => {
            this.successMessage = false;
          }, 4000);
        },
        error: () => {
          this.successMessage = false;
        }
      });
    }
  }
}
