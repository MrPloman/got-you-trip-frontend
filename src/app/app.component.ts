import { Component, inject } from '@angular/core';
import { TranslatorService } from './shared/services/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private translate = inject(TranslatorService);

  constructor() {
    this.translate.setDefaultLanguage();
  }
}
