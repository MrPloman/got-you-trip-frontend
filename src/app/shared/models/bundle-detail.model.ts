import { DestinationsTypes } from '../types/budget.types';
type Positions = 'left' | 'right' | 'center';
export class DetailSlide {
  img: string;
  description: string;
  position: Positions;
  title?: string;

  constructor(
    img: string,
    description: string,
    position: Positions,
    title?: string
  ) {
    this.img = img;
    this.description = description;
    this.position = position;
    this.title = title;
  }
}

export class BundleDetail {
  img: string;
  name: DestinationsTypes;
  description: string;
  slides: DetailSlide[];
  constructor(
    img: string,
    name: DestinationsTypes,
    description: string,
    slides: DetailSlide[]
  ) {
    this.img = img;
    this.name = name;
    this.description = description;
    this.slides = slides;
  }
}
