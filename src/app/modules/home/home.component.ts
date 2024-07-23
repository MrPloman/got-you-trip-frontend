import { Component } from '@angular/core';
import { SlidesBundle } from 'src/app/shared/config/bundle-slides';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected bundleSlides = SlidesBundle;
}
