import { DestinationsTypes } from '../types/budget.types';

export class SlideModel {
  img: string;
  title: DestinationsTypes;
  description: string;
  constructor(img: string, title: DestinationsTypes, description: string) {
    this.img = img;
    this.title = title;
    this.description = description;
  }
}
