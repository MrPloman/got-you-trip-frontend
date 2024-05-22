import { trigger, transition, style, animate } from '@angular/animations';
import { AfterContentInit, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('globalInOut', [
      transition(':enter', [
        style({
          opacity: 0,
          display: 'none',
        }), //apply default styles before animation starts
        animate(
          '100ms 100ms',
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
export class NavbarComponent implements AfterContentInit {
  private _window = getWindow();
  private mobileWidthSize = 768;
  public mobile: boolean = true;
  public navbarOpened!: boolean;
  private router = inject(Router);

  ngAfterContentInit(): void {
    this.resize();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  public goTo(where: string) {
    if (this.mobile) this.navbarOpened = false;
    this.router.navigate([`${where}`], { skipLocationChange: true });
  }
  public resize() {
    if (this._window.innerWidth <= this.mobileWidthSize) {
      this.mobile = true;
    } else this.mobile = false;
  }
}
