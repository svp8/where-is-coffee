import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor(private router:Router) { }
  profile:boolean=false;
  ngOnInit(): void {
  }
  onProfile(){
    this.profile=!this.profile;
  }
}
