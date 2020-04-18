import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }


  typewriter_text: string = "Thank you for your interest";
  typewriter_display: string = "";

  ngOnInit(): void {
    this.typingCallback(this);
  }

  typingCallback(that) {

    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    }  
  }
  
}
