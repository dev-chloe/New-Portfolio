import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {

  top:any;
  left:any;
  expand=false;
  status;
  device;
  
  constructor(public appService: AppService,) { }

  ngOnInit(): void {
    this.check();
  }

  @HostListener('document:click', ['$event'])
  onClick($event) {
     this.expand=true;
     setTimeout(() => {
      this.expand=false;
     }, 500)
  }

 @HostListener('document:mousemove', ['$event'])
 onMousemove($event) {
   this.top=($event.pageY - 10)+ "px";
   this.left= ($event.pageX - 10)+ "px";
  }

  check() {
    this.device = this.appService.startCustomerAcquisitionProcess();
    if(this.device == true) {
      this.status = true;
    }else{
      this.status = false;
    }
  }
}
