import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  public START_IMG:string; 

  constructor() { 
    this.START_IMG = '/assets/img/startimg.png';
  }

  ngOnInit() {
  }

}
