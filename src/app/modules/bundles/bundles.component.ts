import { Component } from '@angular/core';
import { SlidesBundle } from 'src/app/shared/config/bundle-slides';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrl: './bundles.component.scss',
})
export class BundlesComponent {
  protected bundleSlides = SlidesBundle;
}
