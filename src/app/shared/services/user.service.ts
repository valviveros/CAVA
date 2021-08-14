import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5001/cava-ruvi/us-central1/api/users');
  }
  getUserInfo(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5001/cava-ruvi/us-central1/api/users/userinfo');
  }
}
