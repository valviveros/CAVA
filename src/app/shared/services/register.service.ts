import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerCollection!: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) { }

  getRegister() {
    return this.registerCollection = this.firestore.collection('users');
  }

  insertRegister(register: User) {
    this.registerCollection.add({
      name: register.name,
      lname: register.lname,
      email: register.email,
      password: register.password,
    });
  }
}
