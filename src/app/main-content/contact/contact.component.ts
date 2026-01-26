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
  nameFocused = false;
  emailFocused = false;
  messageFocused = false;

  private sanitizeFormData(): void {
    this.contactData.name = this.contactData.name.trim();
    this.contactData.message = this.contactData.message.trim();
    this.contactData.email = this.contactData.email.trim();
  }

  onSubmit(ngForm: NgForm) {
    this.sanitizeFormData();
    if (ngForm.valid) {
      this.http
        .post('https://zeljko-alakovic.de/api/sendMail.php', this.contactData)
        .subscribe({
          next: () => {
            this.successMessage = true;
            ngForm.resetForm();
            setTimeout(() => {
              this.successMessage = false;
            }, 4000);
          },
          error: () => {
            this.successMessage = false;
          },
        });
    }
  }
}
