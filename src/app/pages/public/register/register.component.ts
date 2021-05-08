import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterService } from "src/app/shared/services/register.service";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { CustomValidators } from 'src/app/custom-validators';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
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
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
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
          console.log(x);
          // x["$key"] = element.key;
          // this.registerList.push(x as UserI);
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
        phoneNumber: [
          null,
          Validators.compose([Validators.required])
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

  resetForm(registerForm?: NgForm) {
    if (registerForm != null) {
      registerForm.reset();
    }
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }

}
