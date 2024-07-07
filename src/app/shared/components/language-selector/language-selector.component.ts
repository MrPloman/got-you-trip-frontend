import { Component, inject, OnInit } from '@angular/core';
import { TranslatorService } from '../../services/translator.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent implements OnInit {
  public selectionOpened: boolean = false;
  private translate = inject(TranslatorService);
  public language: 'es' | 'en' = 'en';
  public toogle = {
    color: 'accent',
    checked: false,
    disabled: false,
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const _language = this.translate.getLanguage();
    if (_language) this.language = _language;
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
