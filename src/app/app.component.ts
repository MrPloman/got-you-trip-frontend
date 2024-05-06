import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private translate = inject(TranslateService);
  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
