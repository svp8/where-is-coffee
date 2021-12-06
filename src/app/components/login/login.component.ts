import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router) { }

  public logForm=this.formbuilder.group({
    login: '',
    password: ''
  })
  ngOnInit(): void {
  }
  public onSubmit(){
console.log(this.logForm.get("login")?.value);
this.router.navigateByUrl("home");
  }

}
