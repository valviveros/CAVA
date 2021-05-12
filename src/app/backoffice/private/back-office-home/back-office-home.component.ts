import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-back-office-home',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss']
})
export class BackOfficeHomeComponent implements OnInit {
  @Input() sellersName: string = "Valentina";
  countMore: number = 0;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  dropDownOptions() {
    const query: string = '.sellersContainer .profileOptionsContainer';
    const sellersName: any = document.querySelector(query);
    
    if (this.countMore == 0) {
      this.countMore = 1;
      sellersName.style.transform = "scale(1)";
      sellersName.style.opacity = 1;
    } else {
      this.countMore = 0;
      sellersName.style.transform = "scale(0)";
      sellersName.style.opacity = 0;
    }
  }

  async doLogout() {
    await this.authService.logout();
    this.router.navigate(['/']);
  }

}
