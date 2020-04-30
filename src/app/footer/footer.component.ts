import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', 'footer.component.tablet.scss', 'footer.component.mobile.scss']
})
export class FooterComponent implements OnInit {

  scrollY;
  scrollEvent;

  constructor() { }

  ngOnInit(): void {
    this.scrollY=0;
    this.setEvent();
  }

  setEvent() {
    this.scrollEvent = this.scroll.bind(this);
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  removeEvent() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
  scroll() {
    if (typeof(window) !== 'undefined' && typeof(window.scrollTo) === 'function') {
      this.scrollY = window.scrollY || window.pageYOffset;
    }
  }
}
