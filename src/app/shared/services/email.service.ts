import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {
  EMAILJS_PUBLIC_KEY,
  serviceID,
  tempalteID,
} from 'src/app/configuration/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private async initEmailjs() {
    await emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  }
  public async sendEmail(email: string, message: string) {
    const templateParams = {
      email,
      message,
    };
    await this.initEmailjs();
    return await emailjs
      .send(serviceID, tempalteID, templateParams)
      .then((response: EmailJSResponseStatus) => {
        console.log(response);
        return true;
      });
  }
}
