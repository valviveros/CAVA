import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() active: number = 1;

  constructor(private router: Router, private authService: AuthService) { }

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

  async doLogout() {
    await this.authService.logout();
    this.router.navigate(['/']);
  }
}
