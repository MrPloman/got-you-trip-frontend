/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import {
  FranceBundle,
  ItalyBundle,
  NorwayBundle,
  PortugalBundle,
  SpainBundle,
} from 'src/app/shared/config/bundles-detail';
import { BundleDetail } from 'src/app/shared/models/bundle-detail.model';
import { DestinationsTypes } from 'src/app/shared/types/budget.types';

// AOS Dependencies
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  public bundleSelected: BundleDetail | undefined = undefined;
  public bundleParam: DestinationsTypes | undefined | string =
    this.router.parseUrl(this.router.url).root.children['primary'].segments[1]
      .path;

  constructor(
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Check if the platform is a browser
    const isBrowser = isPlatformBrowser(this.platformId);

    if (isBrowser) {
      AOS.init();
      // Code to execute only on the browser
    } else {
      // Code to execute on the server
    }
  }
  ngOnInit(): void {
    if (this.bundleParam == 'spain') this.bundleSelected = SpainBundle;
    if (this.bundleParam == 'france') this.bundleSelected = FranceBundle;
    if (this.bundleParam == 'italy') this.bundleSelected = ItalyBundle;
    if (this.bundleParam == 'norway') this.bundleSelected = NorwayBundle;
    if (this.bundleParam == 'portugal') this.bundleSelected = PortugalBundle;
  }
}
