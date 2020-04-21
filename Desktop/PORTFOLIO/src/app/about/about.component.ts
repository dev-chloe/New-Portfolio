import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import TypeIt from "typeit";
import { promise } from 'protractor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @ViewChild('contactBox') contactBox:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.workSequential().then(()=> {
      setTimeout(() => {
        this.test()
      },18000)
    });
  }

  workSequential() : Promise<any> {
      return Promise.resolve((() => {
        this.typingCallback();
          return;
      })());
  }
  
  typingCallback() {
    new TypeIt("#text", {
      speed: 20
    })
      .type("<span class='violet'>export</span> <span class='blue'>class</span> <span class='green'>ChloeKim</span> <span class='blue'>implements</span> <span class='green'>OnInit</span> {")
      .break().break()
      .pause(100)
      .type("&nbsp <span class='blue'>constructor</span>(<span class='blue'>private</span> <span class='skybule'>chloe</span>:<span class='green'>ChloeKim</span>) { }")
      .break().break()
      .pause(100)
      .type(" &nbsp <span class='yellow'>ngOnInit</span>(){")
      .break()
      .type(" &nbsp &nbsp  <span class='blue'>this</span><span class='skybule'>.chloe</span>.<span class='skybule'>name</span> = <span class='brown'>'Sunghyun Kim'</span>;")
      .break()
      .type(" &nbsp &nbsp  <span class='blue'>this</span><span class='skybule'>.chloe</span>.<span class='skybule'>birth</span> = <span class='brown'>'1990.11.23'</span>;")
      .break()
      .type(" &nbsp  }")
      .break().break()
      .pause(1000)

      .type(" &nbsp  <span class='yellow'>education</span>(){")
      .break()
      .type(" &nbsp &nbsp  <span class='violet'>return</span> [")
      .break()
      .type("&nbsp &nbsp &nbsp  {<span class='skybule'>2009 ~ 2014 : Dong-eui University - Department of English Language and Literature</span>},")
      .break()
      .type("&nbsp &nbsp &nbsp  {<span class='skybule'>2017 ~ 2018 : Vocational Training Institute - Smart e-book Development C</span>}")
      .break()
      .type("&nbsp &nbsp ]")
      .break()
      .type("&nbsp }")
      .pause(1000)

      .break().break()
      .type(" &nbsp  <span class='yellow'>workExperience</span>(){")
      .break()
      .type(" &nbsp &nbsp  <span class='violet'>return</span> [")
      .break()
      .type("&nbsp &nbsp &nbsp  {<span class='skybule'>2019 ~ 2020 : biginsight - publishing and Front-end develop</span>},")
      .break()
      .type("&nbsp &nbsp &nbsp  {<span class='skybule'>2019.01 ~ 2019.03 : Summer Co. - publishing</span>},")
      .break()
      .type("&nbsp &nbsp &nbsp  {<span class='skybule'>2018.9 ~ 2019.11 : enad - publishing</span>},")
      .break()
      .type("&nbsp &nbsp &nbsp  {<span class='skybule'>2014 ~ 2017 : MTC International - admin assistan</span>t}")
      .break()
      .type("&nbsp &nbsp ]")
      .break()
      .type("&nbsp }")
      .break()
      .type("}")
      .go();
  }
  
  test(): Promise<any> {
    return Promise.resolve((() => {
      
        this.contactBox.nativeElement.classList.add('floater')
        return ;
    })());
  }
    
}
