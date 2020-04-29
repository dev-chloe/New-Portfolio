import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.tablet.scss', './header.component.mobile.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sideMenuList') menuList: ElementRef;

  openSideMenu = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  go(url) {
    this.router.navigate([url]);
    this.sideMenuOff();
  }

  sideMenu() {
    if (this.openSideMenu) {
      this.sideMenuOff();
    } else {
      this.sideMenuOn();
    }
  }

  sideMenuOn() {
    this.openSideMenu = true;
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  sideMenuOff() {
    this.openSideMenu = false;
    document.getElementsByTagName('body')[0].style.overflow = '';
  }

}
