import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }
  ngOnInit() {
  }

}
