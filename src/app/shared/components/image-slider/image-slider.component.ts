import { Component, HostBinding, Input } from '@angular/core';
import { SlideModel } from '../../models/slide.model';
import {
  style,
  animate,
  group,
  query,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',

  animations: [
    trigger('trigger', [
      transition(':increment', [
        group([
          query(
            ':enter',
            [
              style({
                transform: 'translate(100%, 0)',
                opacity: 0,
                display: 'none',
              }),
              animate(
                '300ms 300ms',
                style({
                  transform: 'translate(0, 0)',
                  opacity: 1,
                  display: 'flex',
                })
              ),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              animate(
                '300ms',
                style({
                  transform: 'translate(-100%, 0)',
                  opacity: 0,
                  display: 'none',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
      transition(':decrement', [
        group([
          query(
            ':enter',
            [
              style({
                transform: 'translate(-100%, 0)',
                opacity: 0,
                display: 'none',
              }),
              animate(
                '300ms 300ms',
                style({
                  transform: 'translate(0, 0)',
                  opacity: 1,
                  display: 'flex',
                })
              ),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              animate(
                '300ms',
                style({
                  transform: 'translate(100%, 0)',
                  opacity: 0,
                  display: 'none',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class ImageSliderComponent {
  @Input() slideElements: SlideModel[] = [];
  @HostBinding('@trigger') public selectedIndex = 0;
  private scrolling = false;
  constructor() {
    this.selectedIndex = 0;
  }

  selected(x: number) {
    this.selectedIndex = x;
  }

  sliderAction($event: WheelEvent) {
    if (!this.scrolling) {
      this.scrolling = true;
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
      setTimeout(() => {
        this.scrolling = false;
      }, 1000);
    }
  }
  next() {
    this.selectedIndex++;
  }
  prev() {
    this.selectedIndex--;
  }
}
