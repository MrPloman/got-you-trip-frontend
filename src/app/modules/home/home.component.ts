import { animate, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SlidesBundle } from 'src/app/shared/config/bundle-slides';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('globalInOut', [
      transition(':enter', [
        style({
          opacity: 0,
          display: 'none',
        }), //apply default styles before animation starts
        animate(
          '400ms',
          style({
            opacity: 1,
            display: 'inline',
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          display: 'inline',
        }), //apply default styles before animation starts
        animate(
          '400ms',
          style({
            opacity: 0,
            display: 'none',
          })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  protected bundleSlides = SlidesBundle;
  public backgroundImage = 0;
  constructor(
    @Inject(PLATFORM_ID) private platformId: 'any non-nullish value'
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const isBrowser = isPlatformBrowser(this.platformId);

    if (isBrowser) {
      setInterval(() => {
        console.log(this.backgroundImage);
        if (this.backgroundImage < 4) this.backgroundImage++;
        else this.backgroundImage = 0;
      }, 4000);
    }
  }
}
