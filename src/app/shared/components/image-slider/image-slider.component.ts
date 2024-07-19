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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sliderAction($event: WheelEvent) {
    // $event.preventDefault();
    const ratio = 30 / this.sliderArray.length;
    console.log(ratio);
    if (
      this.selectedIndex < this.sliderArray.length - 1 &&
      $event.deltaY > this.selectedIndex * ratio
    ) {
      this.selectedIndex++;
    } else if (this.selectedIndex > 0 && $event.deltaY < -ratio) {
      this.selectedIndex--;
    }
    // if (
    //   $event.deltaY > this.selectedIndex + 1 * ratio &&
    //   this.sliderArray.length - 1 >= this.selectedIndex
    // ) {
    //   this.selectedIndex++;
    // } else if (
    //   $event.deltaY < 0 &&
    //   this.sliderArray.length - 1 >= this.selectedIndex
    // ) {
    //   this.selectedIndex--;
    // }
    // for (let index = 0; index < this.sliderArray.length; index++) {
    //   console.log(ratio * index, ratio * (index + 1));
    //   console.log('......');
    //   if (
    //     ratio * index >= $event.deltaY &&
    //     ratio * (index + 1) < $event.deltaY
    //   ) {
    //     this.selectedIndex = index;
    //   } else if ($event.deltaY < 0) {
    //     this.selectedIndex = 0;
    //   } else if ($event.wheelDeltaY > 1) {
    //     this.selectedIndex = this.sliderArray.length - 1;
    //   }
    // }

    // if ($event.deltaY >= 1) {
    //   this.selectedIndex = this.sliderArray.length - 1;
    // } else if ($event.deltaY >= 0.5 && $event.deltaY < 1) {
    //   this.selectedIndex = 1;
    // } else if ($event.deltaY < 0) {
    //   this.selectedIndex = 2;
    // }
    console.log($event);
  }
}
