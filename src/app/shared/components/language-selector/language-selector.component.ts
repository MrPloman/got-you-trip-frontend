import { Component, inject } from '@angular/core';
import { TranslatorService } from '../../services/translator.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  public selectionOpened: boolean = false;
  private translate = inject(TranslatorService);
  public language: 'es' | 'en' = 'es';
  public toogle = {
    color: 'accent',
    checked: false,
    disabled: false,
  };

  constructor() {
    const _language = this.translate.getLanguage();
    console.log(_language);
    if (_language) this.language = this.language;
    else this.language = 'es';
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  public changeLanguage() {
    if (this.language === 'es') {
      this.translate.setLanguage('en');
      this.language = 'en';
    } else {
      this.translate.setLanguage('es');
      this.language = 'es';
    }
  }
}
