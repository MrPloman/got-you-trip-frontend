import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContentExampleDialog } from 'src/app/shared/components/modal/modal.component';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(
    public emailService: EmailService,
    public router: Router
  ) {}
  readonly dialog = inject(MatDialog);

  public emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', [Validators.required]),
  });
  public emailSent: boolean = false;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public isValidForm() {
    if (this.emailForm.valid) return true;
    else return false;
  }

  public checkForm() {
    this.emailForm.markAllAsTouched();
    if (this.isValidForm()) {
      this.emailService
        .sendEmail(
          this.emailForm.controls['email'].value,
          this.emailForm.controls['text'].value
        )
        .then(value => {
          console.log(value);
          this.openDialog('success', 'email enviado correctamente');
          setTimeout(() => {
            this.dialog.closeAll();
          }, 3000);
        });
    }
  }

  private openDialog(title: string, message: string) {
    this.dialog.open(DialogContentExampleDialog, {
      data: {
        title,
        message,
      },
    });
  }
}
