import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() active: number = 1;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }
  goToAboutUs() {
    this.router.navigate(['/aboutus']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
