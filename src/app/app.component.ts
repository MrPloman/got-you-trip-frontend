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

  constructor(public router: Router) {
    this.translate.setDefaultLanguage();
    this.router.navigate(['bundles/italy'], { skipLocationChange: true });
  }
}
