import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
})
export class ImageSliderComponent {
  sliderArray = [
    {
      img: 'http://bloquo.cc/img/works/1.jpg',
      alt: '',
      text: '365 Days Of weddings a year',
    },
    {
      img: 'http://bloquo.cc/img/works/2.jpg',
      alt: '',
      text: '365 Days Of weddings a year',
    },
    {
      img: 'http://bloquo.cc/img/works/3.jpg',
      alt: '',
      text: '365 Days Of weddings a year',
    },
    {
      img: 'http://bloquo.cc/img/works/4.jpg',
      alt: '',
      text: '365 Days Of weddings a year',
    },
    {
      img: 'http://bloquo.cc/img/works/5.jpg',
      alt: '',
      text: '365 Days Of weddings a year',
    },
  ];
  transform: number | undefined;
  selectedIndex = 0;
  selected(x: number) {
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
}
