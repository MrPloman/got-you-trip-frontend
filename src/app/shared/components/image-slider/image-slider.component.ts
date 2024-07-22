import { Component, Input } from '@angular/core';
import { SlideModel } from '../../models/slide.model';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', display: 'none', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', display: 'flex', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(-100%)', display: 'none', opacity: 0 })
        ),
      ]),
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', display: 'none', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', display: 'flex', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(100%)', display: 'none', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class ImageSliderComponent {
  direction: string = 'right';

  @Input() slideElements: SlideModel[] = [
    {
      img: 'https://www.adpersonam.net/wp-content/uploads/2021/09/ad-personam-itinerari-toscana-crete-senesi.jpg',
      title: 'a',
      description: 'a',
    },
    {
      img: 'https://www.frozentimes.net/wordpress/wp-content/gallery/2012-Spain-Landscapes/2012-Spain_Benalmadena_2012-3186.jpg',
      title: 'a',
      description: 'a',
    },
    {
      img: 'https://cdn-v2.theculturetrip.com/1280x713/wp-content/uploads/2017/12/france-1805936_1920.webp',
      title: 'a',
      description: 'a',
    },
    {
      img: 'https://www.frozentimes.net/wordpress/wp-content/gallery/2012-Spain-Landscapes/2012-Spain_Benalmadena_2012-3186.jpg',
      title: 'a',
      description: 'a',
    },
    {
      img: 'https://cdn-v2.theculturetrip.com/1280x713/wp-content/uploads/2017/12/france-1805936_1920.webp',
      title: 'a',
      description: 'a',
    },
    {
      img: 'https://www.frozentimes.net/wordpress/wp-content/gallery/2012-Spain-Landscapes/2012-Spain_Benalmadena_2012-3186.jpg',
      title: 'a',
      description: 'a',
    },
    {
      img: 'https://cdn-v2.theculturetrip.com/1280x713/wp-content/uploads/2017/12/france-1805936_1920.webp',
      title: 'a',
      description: 'a',
    },
  ];
  private transform: number;
  protected selectedIndex = 0;
  private scrolling = false;
  constructor() {
    this.selectedIndex = 0;
    this.transform = 100;
  }

  selected(x: number) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x: number) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i: number) {
    this.transform = 100 - i * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }

  sliderAction($event: WheelEvent) {
    if (!this.scrolling) {
      this.scrolling = true;

      setTimeout(() => {
        if (
          this.selectedIndex < this.slideElements.length - 1 &&
          ($event.deltaY > 0 || $event.deltaX > 0)
        ) {
          this.next();
        } else if (
          this.selectedIndex > 0 &&
          ($event.deltaY < 0 || $event.deltaX < 0)
        ) {
          this.prev();
        }
        this.scrolling = false;
      }, 1000);
    }
  }
  next() {
    this.direction = 'right';
    this.selectedIndex++;
  }
  prev() {
    this.direction = 'left';
    this.selectedIndex--;
  }
}
