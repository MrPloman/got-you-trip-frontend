import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', [Validators.required]),
  });

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public checkForm() {
    this.emailForm.markAllAsTouched();
    if (this.emailForm.valid) {
      console.log('es valido');
    } else {
      console.log('no es valido');
    }
  }
}
