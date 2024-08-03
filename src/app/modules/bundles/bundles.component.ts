import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SlidesBundle } from 'src/app/shared/config/bundle-slides';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrl: './bundles.component.scss',
})
export class BundlesComponent {
  protected bundleSlides = SlidesBundle;
  constructor(public router: Router) {}
}
