import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
})
export class ImageSliderComponent implements OnInit {
  sliderArray: { img: string; alt: string; text: string }[] = [
    {
      img: 'https://www.adpersonam.net/wp-content/uploads/2021/09/ad-personam-itinerari-toscana-crete-senesi.jpg',
      alt: 'a',
      text: 'a',
    },
    {
      img: 'https://www.frozentimes.net/wordpress/wp-content/gallery/2012-Spain-Landscapes/2012-Spain_Benalmadena_2012-3186.jpg',
      alt: 'a',
      text: 'a',
    },
    {
      img: 'https://cdn-v2.theculturetrip.com/1280x713/wp-content/uploads/2017/12/france-1805936_1920.webp',
      alt: 'a',
      text: 'a',
    },
  ];
  transform: number;
  selectedIndex = 0;
  constructor() {
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {}

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
  sliderAction($event: unknown) {
    this.selectedIndex = this.selectedIndex + 1;
    this.transform = 100 - this.selectedIndex * 50;
  }
}
