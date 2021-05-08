import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterService } from "src/app/shared/services/register.service";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { CustomValidators } from 'src/app/custom-validators';
import { UserI } from 'src/app/shared/interfaces/UserI';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  active: number = 0;
  registerList: UserI[] = [];
  ngForm = new FormGroup({
    name: new FormControl(),
    lname: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  constructor(private router: Router, private registerService: RegisterService, private formBuilder: FormBuilder, private firebaseDB: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
    this.ngForm = this.createSignupForm();
  }

  ngOnInit(): void {
    this.registerService.getRegister()
      .snapshotChanges().subscribe(item => {
        this.registerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          this.registerList.push(x as UserI);
        });
      });
    this.resetForm();
  }

  createSignupForm(): FormGroup {
    return this.formBuilder.group(
      {
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        name: [
          null,
          Validators.compose([Validators.required])
        ],
        lname: [
          null,
          Validators.compose([Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(6)
          ])
        ],
        confirmPassword: [
          null,
          Validators.compose([Validators.required])
        ]
      },
      {
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  onSubmit() {
    const Email = this.ngForm.controls.email.value;
    const Password = this.ngForm.controls.password.value;
    const ConfirmPassword = this.ngForm.controls.confirmPassword.value;
    let EmailExist = this.registerList.find(user => user.email == Email);

    if (EmailExist) {
      console.log("Ya existe este email");
      const query: string = '.registerContainer #emailTaken';
      const emailTaken: any = document.querySelector(query);
      emailTaken.style.display = "flex";
      setTimeout(() => {
        emailTaken.style.display = "none";
      }, 3000);
    } else {
      console.log("Registré");
      this.registerService.insertRegister(this.ngForm.value);
      if (ConfirmPassword == Password) {
        this.firebaseAuth.createUserWithEmailAndPassword(Email, Password).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        });

        const query: string = '.registerContainer #successRegister';
        const message: any = document.querySelector(query);
        message.style.display = "flex";

        this.ngForm.reset({
          email: '',
          phoneNumber: '',
          name: '',
          lname: '',
          password: '',
          confirmPassword: '',
        });

        setTimeout(() => {
          message.style.display = "none";
          this.router.navigate(["/login"]);
        }, 3000);

      } else {
        console.log("Passwords do no match");
      }
    }
  }

  resetForm(registerForm?: NgForm) {
    if (registerForm != null) {
      registerForm.reset();
    }
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }
}
