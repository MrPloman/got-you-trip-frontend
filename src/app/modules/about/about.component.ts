import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(public emailService: EmailService) {}
  public emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', [Validators.required]),
  });

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  public isValidForm() {
    if (this.emailForm.valid) {
      return true;
    } else {
      return false;
    }
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
        });
    }
  }
}
