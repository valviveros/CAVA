import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerList!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getRegister() {
    return this.registerList = this.firebase.list('users');
  }

  insertRegister(register: User) {
    this.registerList.push({
      name: register.name,
      lname: register.lname,
      email: register.email,
      password: register.password,
    });
  }
}
