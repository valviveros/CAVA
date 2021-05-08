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

  constructor(private router: Router, private registerService: RegisterService, private formBuilder: FormBuilder, private firebaseDB: AngularFireDatabase, private firebaseAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
