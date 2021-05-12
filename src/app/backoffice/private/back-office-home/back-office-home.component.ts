import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-back-office-home',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss']
})
export class BackOfficeHomeComponent implements OnInit {
  @Input() sellersName: string = "Usuario";
  countMore: number = 0;
  user: any;

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth, private firebase: AngularFireDatabase) { }

  ngOnInit(): void {
    this.loadSellersName();
  }

  async loadSellersName() {
    let Key: any;
    let Email: any;
    this.firebaseAuth.user.subscribe((data => {
      this.user = data;
      Email = this.user['email'];
    }));
    await this.firebase.database.ref("users").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == Email) {
          Key = childKey;
          // console.log("entramos", childKey);
          // console.log("recorrido", childKey);
          user.forEach((name => {
            const nameChildKey = name.key;
            const nameChildData = name.val();
            // console.log("entramos", nameChildKey);
            // console.log("recorrido", nameChildData);
            if (nameChildKey == 'name') {
              this.sellersName = nameChildData;
            }
          }))
        }
      });
    });
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
    this.router.navigate(['/login']);
  }

}
