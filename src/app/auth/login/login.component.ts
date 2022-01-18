import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// @ViewChild é um decorator.
  @ViewChild('login') loginForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    // To Do: Integrar com AuthService
  }

}
