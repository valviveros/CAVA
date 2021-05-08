import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserI } from "../interfaces/UserI";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerList!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getRegister() {
    return this.registerList = this.firebase.list('users');
  }

  insertRegister(register: UserI) {
    this.registerList.push({
      name: register.name,
      lname: register.lname,
      phoneNumber: register.phoneNumber,
      email: register.email,
      password: register.password,
    });
  }
}
