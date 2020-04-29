import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.component.tablet.scss', './contact.component.mobile.scss']
})
export class ContactComponent implements OnInit {

  emailflag: boolean = false;
  messageflag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  emailcheck(event) {
    if(event.target.value != '') {
      this.emailflag = true;
    }
    else{
      this.emailflag = false;
    }
  }

  messagecheck(event) {
    if(event.target.value != '') {
      this.messageflag = true;
    }
    else{
      this.messageflag = false;
    }
  }

}
