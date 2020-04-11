import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menuText = [
    { label: 'Chloe.K'},
    { label: 'About'},
    { label: 'What I Do'},
    { label: 'Contact'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
