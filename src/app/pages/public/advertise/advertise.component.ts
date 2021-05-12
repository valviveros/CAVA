import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {
  active: number = 3;
  
  constructor(private router: Router) { }

  ngOnInit(): void {}

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
