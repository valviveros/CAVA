import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  @Input() sellersName: string = "";
  @Input() Email: any;
  sellersLName: string = "";
  countMore: number = 0;
  user: any;
  clicked: number = 0;
  myProfileInfoForm = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    lname: new FormControl(),
    id: new FormControl(),
    cellphoneNumber: new FormControl(),
  });

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth, private firebase: AngularFireDatabase, private formBuilder: FormBuilder) {
    this.myProfileInfoForm = this.createProfileForm();
  }

  ngOnInit(): void {
    this.loadSellersInfo();

    $(".sideMenuBtn").on("click", function () {
      var hasOptions = $(this).hasClass("options");

      if (hasOptions) {
        $(".sideMenuBtn").removeClass("active");
        $(this).addClass("active");
      } else {
        $(".sideMenuBtn").removeClass("active");
        $(this).addClass("active");
        $(".sideMenuInnerBtn").removeClass("active");
      }
    });

    $(".sideMenuInnerBtn").on("click", function () {
      var hasOptions = $(".sideMenuBtn").hasClass("options");

      if (hasOptions) {
        $(".sideMenuBtn").removeClass("active");
        $(".sideMenuBtn.options").addClass("active");
      }

      $(".sideMenuInnerBtn").removeClass("active");
      $(this).addClass("active");
    });
  }

  loadSellersInfo() {
    let Key: any;

    this.firebaseAuth.user.subscribe((async (data) => {
      this.user = data;
      this.Email = this.user['email'];

      await this.firebase.database.ref("users").once("value", (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == this.Email) {
            Key = childKey;
            user.forEach((name => {
              const nameChildKey = name.key;
              const nameChildData = name.val();
              if (nameChildKey == 'name') {
                this.sellersName = nameChildData;
                this.user.updateProfile({
                  displayName: this.sellersName
                });
              }
              if (nameChildKey == 'lname') {
                this.sellersLName = nameChildData;
              }
            }))
          }
        });
      });

      this.sellersName = this.user['displayName'];
      this.myProfileInfoForm.controls.email.setValue(this.Email);
      this.myProfileInfoForm.controls.name.setValue(this.sellersName);
      this.myProfileInfoForm.controls.lname.setValue(this.sellersLName);
    }));
  }

  sideMenuOptionClicked() {
    var icon: any = $(".options").find("i.fas");
    var btnOptionsContainer: any = $(".btnOptionsContainer");

    if (this.clicked == 0) {
      icon.css("transform", "rotate(-90deg)");
      btnOptionsContainer.css("transform", "scaleY(1)");
      btnOptionsContainer.css("opacity", "1");
      this.clicked = 1;
    } else {
      $("i.fas").css("transform", "rotate(0deg)");
      btnOptionsContainer.css("transform", "scaleY(0)");
      btnOptionsContainer.css("opacity", "0");
      this.clicked = 0;
    }
  }

  goToMyProfile() {
    this.router.navigate(['/sellers/myprofile']);
  }

  createProfileForm(): FormGroup {
    return this.formBuilder.group(
      {
        email: [
          { 
            value: '',
            disabled: true 
          },
          Validators.compose([
            Validators.email,
            Validators.required
          ])
        ],
        name: [
          null,
          Validators.compose([Validators.required])
        ],
        lname: [
          null,
          Validators.compose([Validators.required])
        ],
        id: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(6)
          ])
        ],
        cellphoneNumber: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(7)
          ])
        ]
      }
    )
  }

  onSubmit() {
    console.log(this.myProfileInfoForm.controls);
  }

  dropDownOptions() {
    const query: string = '.myProfileContainer .profileOptionsContainer';
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
