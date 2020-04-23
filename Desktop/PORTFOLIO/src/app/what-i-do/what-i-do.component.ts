import { Component, OnInit } from '@angular/core';
import { single } from '../../data/data';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss']
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
      this.view = [innerWidth / 1.5, innerHeight / 1.8];
    } else if(window.innerWidth >= 700) {
      this.view = [innerWidth / 1.3, innerHeight / 1.8];
    } else if(window.innerWidth < 700) {
      this.view = [innerWidth / 1.35, innerHeight];
    }
   }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
  }

  onResize(event) {
    if(window.innerWidth >= 1300) {
    } 
    else if(window.innerWidth >= 1200) {
      this.view = [event.target.innerWidth / 1.35, event.target.innerHeight / 2];
    } 
    else if(window.innerWidth >= 700) {
      this.view = [event.target.innerWidth / 1.35, event.target.innerHeight / 2];
    } 
    else if(window.innerWidth < 700) {
      this.view = [event.target.innerWidth / 1.35, event.target.innerHeight];
    }
  }

}
