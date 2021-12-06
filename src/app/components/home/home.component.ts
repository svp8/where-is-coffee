import { Component, OnInit } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

}
