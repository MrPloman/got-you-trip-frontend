import { Component, inject } from '@angular/core';
import { TranslatorService } from './shared/services/translator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private translate = inject(TranslatorService);
  public notShowFooter: boolean = false;

  constructor(public router: Router) {
    console.log(this.router.url);
    this.translate.setDefaultLanguage();
  }
}
