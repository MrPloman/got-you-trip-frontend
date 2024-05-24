import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslatorService {
  private translate = inject(TranslateService);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public setDefaultLanguage() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    if (isPlatformBrowser(this.platformId)) {
      const lang = localStorage.getItem('language');
      if (!lang) {
        this.setLanguage('en');
      } else {
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
      }
    }
  }

  public setLanguage(lang: 'es' | 'en') {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  public getLanguage() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('language');
    } else return null;
  }
}
