import { Component, OnInit } from '@angular/core';
import { single } from '../../data/data';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss', './what-i-do.component.tablet.scss', './what-i-do.component.mobile.scss']
})
export class WhatIDoComponent implements OnInit {

  view;
  single: any[];
  // view: any[] = [800, 700];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#F29F05', '#DA0033', '#FF4D73', '#056CF2', '#0367A6', '#F23D3D', '#853CAC', '#05AFF2']
  };


  constructor() {
    Object.assign(this, { single });
    if(window.innerWidth >= 1200) {
      this.view = [1200, 550];
    } else if(window.innerWidth >= 450) {
      this.view = [innerWidth / 1.1, innerHeight / 1.8];
    } else if(window.innerWidth >= 400) {
      this.view = [innerWidth / 1.1, innerHeight * 2.5];
    } else if(window.innerWidth < 400) {
      this.view = [innerWidth , innerHeight * 2.5];
    }
   }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
  }

  onResize(event) {
  if(window.innerWidth >= 1200) {
      this.view = [1200, 550];
    } 
    else if(window.innerWidth >= 450) {
      this.view = [event.target.innerWidth / 1.1, event.target.innerHeight / 2];
    } 
    else if(window.innerWidth >= 400) {
      this.view = [event.target.innerWidth  / 1.1, event.target.innerHeight * 2.5];
    }
    else if(window.innerWidth < 400) {
      this.view = [event.target.innerWidth, event.target.innerHeight * 2.5];
    }
  }

}
