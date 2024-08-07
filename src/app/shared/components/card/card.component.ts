import { Component, Input } from '@angular/core';
import { DetailSlide } from '../../models/bundle-detail.model';
DetailSlide;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() public card!: DetailSlide;
}
