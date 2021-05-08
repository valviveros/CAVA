import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder, } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { RegisterService } from "src/app/shared/services/register.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { UserI } from 'src/app/shared/interfaces/UserI';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  active: number = 5;
  signupForm = new FormGroup({
    signupEmail: new FormControl(),
    signupPassword: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
