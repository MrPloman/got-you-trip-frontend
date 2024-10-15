import { animate, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SlidesBundle } from 'src/app/shared/config/bundle-slides';
import { HomeCardsConfig } from 'src/app/shared/config/home-cards.config';
import { HomeCards } from 'src/app/shared/models/home-cards.model';

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
  public title: string = 'Welcome';
  public description: string = 'Lorem ipsum';
  protected bundleSlides = SlidesBundle;
  public backgroundImage: number = 0;
  public cards: HomeCards[] = HomeCardsConfig;
  private intervalCarrouselPicture: ReturnType<typeof setTimeout> | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: 'any non-nullish value'
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const isBrowser = isPlatformBrowser(this.platformId);

    if (isBrowser) {
      this.intervalCarrouselPicture = setInterval(() => {
        console.log(this.backgroundImage);
        if (this.backgroundImage < 4) {
          this.backgroundImage++;
        } else {
          this.backgroundImage = 0;
        }
      }, 8000);
    }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalCarrouselPicture);
  }
}
