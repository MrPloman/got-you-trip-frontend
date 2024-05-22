import { Component } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  public selectionOpened: boolean = false;
  public language: 'es' | 'en' = 'es';
  public changeLanguage() {
    console.log(this.language);
    if (this.language === 'es') this.language = 'en';
    else this.language = 'es';
    console.log(this.language);
  }
}
