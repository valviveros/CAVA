import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from "@angular/forms";
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
  registerList: UserI[] = [];
  signupForm = new FormGroup({
    signupEmail: new FormControl(),
    signupPassword: new FormControl(),
  });

  constructor(private router: Router, private firebase: AngularFireDatabase, private firebaseAuth: AngularFireAuth, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.getRegister()
      .snapshotChanges().subscribe(item => {
        this.registerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          this.registerList.push(x as UserI);
        });
      });
  }

  doLogin() {
    let email = this.signupForm.controls.signupEmail.value;
    const password = this.signupForm.controls.signupPassword.value;

    let emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    let userExist;
    if (email.match(emailRegexp)) {
      userExist = this.registerList.find(user => user.email == email);
    }

    if (userExist) {
      this.firebaseAuth.signInWithEmailAndPassword(email, password).then(() => {
        this.router.navigate(['/sellers']);
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        // console.log(`Error [${errorCode}]: ${errorMessage}`);
        const query: string = '.loginContainer #passwordWrong';
        const passwordWrong: any = document.querySelector(query);
        passwordWrong.style.display = "flex";
        setTimeout(() => {
          passwordWrong.style.display = "none";
        }, 3000);
      });
    } else {
      const query: string = '.loginContainer #userDoesNotExist';
      const userDoesNotExist: any = document.querySelector(query);
      userDoesNotExist.style.display = "flex";
      setTimeout(() => {
        userDoesNotExist.style.display = "none";
      }, 3000);
    }
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }
}