import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  animations: [
    trigger('inAndOutLoading', [
      transition(':enter', [
        style({
          opacity: 0,
          display: 'none',
        }), //apply default styles before animation starts
        animate(
          '200ms 200ms',
          style({
            opacity: 1,
            display: 'flex',
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          display: 'flex',
        }), //apply default styles before animation starts
        animate(
          '200ms',
          style({
            opacity: 0,
            display: 'none',
          })
        ),
      ]),
    ]),
  ],
})
export class LoaderComponent {
  @Input() loading: boolean = false;
}
