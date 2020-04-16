import { Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('text1') text1:ElementRef;
  @ViewChild('text2') text2:ElementRef;
  @ViewChild('text3') text3:ElementRef;

  event: MouseEvent;

  X:number;
  Y:number;

  x:number;
  y:number;

  clientX = 0;
  clientY = 0;
  
  text = 'Welcome!';
  changeText = false;
  constructor() { }

  ngOnInit(): void {
    this.X = window.innerWidth;
    this.Y = window.innerHeight;
   
  }

  onEvent(event: MouseEvent): void {
    this.event = event;
  }

  coordinates(event: MouseEvent): void {
    
    if(event.clientX) {
      this.x = event.clientX;
    } 
    if(event.clientY){
      this.y = event.clientY;
    }
    
    let mx = this.x/this.X*100;
    let my = this.y/this.Y*100;
    
    let x = this.x/this.X;


    let xdeg = 30/49*(mx-50);
    let ydeg = -1*30/49*(my-50);

    this.text1.nativeElement.style.transform = 'translate(-50%,-50%) rotateX(' + ydeg + 'deg) rotateY(' + 0.4*xdeg+ 'deg)';
    this.text1.nativeElement.style.marginLeft= 0.5*xdeg+"px";
    this.text1.nativeElement.style.marginTop= 0.5*xdeg+"px";
    this.text2.nativeElement.style.transform = 'translate(-50%,-50%) rotateX(' + ydeg + 'deg) rotateY(' + 0.4*xdeg+ 'deg)';
    this.text2.nativeElement.style.marginLeft= -0.5*xdeg+"px";
    this.text2.nativeElement.style.marginTop= -0.5*xdeg+"px";
    this.text3.nativeElement.style.transform = 'translate(-50%,-50%) rotateX(' + ydeg + 'deg) rotateY(' + 0.4*xdeg+ 'deg)';

    if(event.clientX < this.X/2 && event.clientY < this.Y/2) {
      this.text ='Home'
    }

    if(event.clientX > this.X/2 && event.clientY < this.Y/2) {
      this.text ='About'
    }

    if(event.clientX < this.X/2 && event.clientY > this.Y/2) {
      this.text ='What I Do'
    }

    if(event.clientX > this.X/2 && event.clientY > this.Y/2) {
      this.changeText = true;
      this.text ='Contact'
    }

    if(this.changeText === false) {
      this.text = 'Welcome!'
    }

  }

}
