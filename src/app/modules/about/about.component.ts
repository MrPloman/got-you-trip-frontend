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
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.openDialog(
  //     'success',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui nibh, rhoncus ut tristique nec, ullamcorper ut nunc. Donec scelerisque vulputate ipsum, ut dapibus nisl lobortis pretium. Curabitur nec tristique ex. Duis dignissim, libero non varius porttitor, sapien massa ultrices nibh, vel porta libero nibh et velit. Morbi efficitur a'
  //   );
  // }

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
        .then(() => {
          this.openDialog('success', 'email enviado correctamente');
          this.emailForm.reset();

          setTimeout(() => {
            this.dialog.closeAll();
          }, 3000);
        });
    }
  }

  private openDialog(title: string, message: string) {
    this.dialog.open(DialogContentExampleDialog, {
      panelClass: 'custom-dialog-theme',
      width: '30%',
      enterAnimationDuration: 500,
      exitAnimationDuration: 500,
      data: {
        title,
        message,
      },
    });
  }
}
