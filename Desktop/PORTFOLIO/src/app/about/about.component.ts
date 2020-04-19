import { Component, OnInit } from '@angular/core';

import TypeIt from "typeit";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.typingCallback();
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
      .type(" &nbsp &nbsp  this.chloe.name = 'Sunghyun Kim';")
      .break()
      .type(" &nbsp &nbsp  this.chloe.birth = '1990.11.23';")
      .break()
      .type(" &nbsp  }")
      .break().break()
      .pause(1000)

      .type(" &nbsp  education(){")
      .break()
      .type(" &nbsp &nbsp  return [")
      .break()
      .type("&nbsp &nbsp &nbsp  {2009 ~ 2014 : Dong-eui University - Department of English Language and Literature},")
      .break()
      .type("&nbsp &nbsp &nbsp  {2017 ~ 2018 : Vocational Training Institute - Smart e-book Development C}")
      .break()
      .type("&nbsp &nbsp ]")
      .break()
      .type("&nbsp }")
      .pause(1000)

      .break().break()
      .type(" &nbsp  workExperience(){")
      .break()
      .type(" &nbsp &nbsp  return [")
      .break()
      .type("&nbsp &nbsp &nbsp  {2019 ~ 2020 : biginsight - publishing and Front-end develop},")
      .break()
      .type("&nbsp &nbsp &nbsp  {2019.01 ~ 2019.03 : Summer Co. - publishing},")
      .break()
      .type("&nbsp &nbsp &nbsp  {2018.9 ~ 2019.11 : enad - publishing},")
      .break()
      .type("&nbsp &nbsp &nbsp  {2014 ~ 2017 : MTC International - admin assistant}")
      .break()
      .type("&nbsp &nbsp ]")
      .break()
      .type("&nbsp }")
      


      .break()
      .type("}")
      // .type("<b>Name</b>")
      // .break()
      // .type("Sunghyun Kim")
      // .break()
      // .break()
      // .pause(1000)
      // .type("<b>Birth</b>")
      // .break()
      // .type("1990.11.23")
      // .break()
      // .break()
      // .pause(1000)
      // .type("<b>Education</b>")
      // .break()
      // .pause(1000)
      // .type("2009 ~ 2014 : Dong-eui University - Department of English Language and Literature")
      // .break()
      // .pause(1000)
      // .type("2017 ~ 2018 : Vocational Training Institute - Smart e-book Development C")
      // .break()
      // .break()
      // .pause(1000)
      // .type("<b>Work Experience</b>")
      // .break()
      // .type("2019 ~ 2020 : biginsight - publishing and Front-end develop")
      // .break()
      // .pause(1000)
      // .type("2019.01 ~ 2019.03 : Summer Co. - publishing")
      // .break()
      // .pause(1000)
      // .type("2018.9 ~ 2019.11 : enad - publishing")
      // .break()
      // .pause(1000)
      // .type("2014 ~ 2017 : MTC International - admin assistant")
      .go();
  }
  
}
