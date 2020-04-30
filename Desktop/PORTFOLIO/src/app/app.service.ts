import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public router: Router) { }

  startCustomerAcquisitionProcess() {
    let isMobile = (window.navigator.userAgent.toLowerCase().indexOf('android') > -1 || window.navigator.userAgent.toLowerCase().indexOf('ipad') > -1 || window.navigator.userAgent.toLowerCase().indexOf('iphone') > -1);

    let isValidUserAgent;

    if (isMobile) {
      return isValidUserAgent = false;
    } else {
      return isValidUserAgent = true;
    }
  }
}
