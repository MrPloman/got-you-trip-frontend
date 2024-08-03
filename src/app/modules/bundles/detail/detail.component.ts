import { Component } from '@angular/core';
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

  constructor(public router: Router) {}
  ngOnInit(): void {
    if (this.bundleParam == 'spain') this.bundleSelected = SpainBundle;
    if (this.bundleParam == 'france') this.bundleSelected = FranceBundle;
    if (this.bundleParam == 'italy') this.bundleSelected = ItalyBundle;
    if (this.bundleParam == 'norway') this.bundleSelected = NorwayBundle;
    if (this.bundleParam == 'portugal') this.bundleSelected = PortugalBundle;

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.bundleSelected = this.router.parseUrl(this.router.url).root.children[
    //   'primary'
    // ].segments[1].path;
    console.log(this.bundleSelected);
  }
}
