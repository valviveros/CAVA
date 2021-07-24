import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
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
  @Input() sellersName: string = '';
  Email: any;
  sellersLName: string = '';
  password: string = '';
  id: any;
  cellphoneNumber: any;
  countMore: number = 0;
  user: any;
  clicked: number = 0;
  myProfileInfoForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth, private firebase: AngularFireDatabase, private formBuilder: FormBuilder) {
    this.myProfileInfoForm = this.createProfileForm();
    this.loadSellersInfo();
  }

  ngOnInit(): void {
    $('.sideMenuBtn').on('click', function () {
      var hasOptions = $(this).hasClass('options');

      if (hasOptions) {
        $('.sideMenuBtn').removeClass('active');
        $(this).addClass('active');
      } else {
        $('.sideMenuBtn').removeClass('active');
        $(this).addClass('active');
        $('.sideMenuInnerBtn').removeClass('active');
      }
    });

    $('.sideMenuInnerBtn').on('click', function () {
      var hasOptions = $('.sideMenuBtn').hasClass('options');

      if (hasOptions) {
        $('.sideMenuBtn').removeClass('active');
        $('.sideMenuBtn.options').addClass('active');
      }

      $('.sideMenuInnerBtn').removeClass('active');
      $(this).addClass('active');
    });
  }

  loadSellersInfo() {
    let Key: any;

    this.firebaseAuth.user.subscribe((async (data) => {
      this.user = data;
      this.Email = this.user['email'];

      await this.firebase.database.ref('users').once('value', (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == this.Email) {
            Key = childKey;
            user.forEach((info => {
              const infoChildKey = info.key;
              const infoChildData = info.val();
              if (infoChildKey == 'name') {
                this.sellersName = infoChildData;
                this.user.updateProfile({
                  displayName: this.sellersName
                });
              }
              if (infoChildKey == 'lname') {
                this.sellersLName = infoChildData;
              }
              if (infoChildKey == 'id') {
                this.id = infoChildData;
              }
              if (infoChildKey == 'cellphoneNumber') {
                this.cellphoneNumber = infoChildData;
              }
              if (infoChildKey == 'password') {
                this.password = infoChildData;
              }
            }));
          }
        });
      });

      this.sellersName = this.user['displayName'];
      this.myProfileInfoForm.controls.email.setValue(this.Email);
      this.myProfileInfoForm.controls.name.setValue(this.sellersName);
      this.myProfileInfoForm.controls.lname.setValue(this.sellersLName);
      this.myProfileInfoForm.controls.id.setValue(this.id);
      this.myProfileInfoForm.controls.cellphoneNumber.setValue(this.cellphoneNumber);
    }));
  }

  sideMenuOptionClicked() {
    var icon: any = $('.options').find('i.fas');
    var btnOptionsContainer: any = $('.btnOptionsContainer');

    if (this.clicked == 0) {
      icon.css('transform', 'rotate(-90deg)');
      btnOptionsContainer.css('transform', 'scaleY(1)');
      btnOptionsContainer.css('opacity', '1');
      this.clicked = 1;
    } else {
      $('i.fas').css('transform', 'rotate(0deg)');
      btnOptionsContainer.css('transform', 'scaleY(0)');
      btnOptionsContainer.css('opacity', '0');
      this.clicked = 0;
    }
  }

  goToMyProfile() {
    this.router.navigate(['/sellers/myprofile']);
  }

  goToMyProducts() {
    this.router.navigate(['/sellers/products']);
  }

  goToContact() {
    this.router.navigate(['/sellers/contact']);
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
          Validators.compose([
            Validators.required
          ])
        ],
        lname: [
          null,
          Validators.compose([Validators.required])
        ],
        id: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10),
            Validators.pattern(/[0-9]/g)
          ])
        ],
        cellphoneNumber: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(7),
            Validators.maxLength(10),
            Validators.pattern(/[0-9]/g)
          ])
        ]
      }
    )
  }

  onSubmit() {
    let Key: any;

    if (this.myProfileInfoForm.valid) {
      this.firebaseAuth.user.subscribe((async (data) => {
        this.user = data;
        this.Email = this.user['email'];

        await this.firebase.database.ref('users').once('value', (users) => {
          users.forEach((user) => {
            const childKey = user.key;
            const childData = user.val();
            if (childData.email == this.Email) {
              Key = childKey;
              this.firebase.database.ref(`users/${Key}`).update({
                name: this.myProfileInfoForm.controls.name.value,
                lname: this.myProfileInfoForm.controls.lname.value,
                id: this.myProfileInfoForm.controls.id.value,
                cellphoneNumber: this.myProfileInfoForm.controls.cellphoneNumber.value
              });
            }
          });
        });
      }));

      const query: string = '.myProfileContainer #successMessage';
      const successMessage: any = document.querySelector(query);
      successMessage.style.display = 'flex';

      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    } else {
      const query: string = '.myProfileContainer #failureMessage';
      const failureMessage: any = document.querySelector(query);
      failureMessage.style.display = 'flex';

      setTimeout(() => {
        failureMessage.style.display = 'none';
      }, 3000);
    }
  }

  dropDownOptions() {
    const query: string = '.myProfileContainer .profileOptionsContainer';
    const sellersName: any = document.querySelector(query);

    if (this.countMore == 0) {
      this.countMore = 1;
      sellersName.style.transform = 'scale(1)';
      sellersName.style.opacity = 1;
    } else {
      this.countMore = 0;
      sellersName.style.transform = 'scale(0)';
      sellersName.style.opacity = 0;
    }
  }

  async doLogout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  validateField(controlName:string): boolean{
    let control = this.myProfileInfoForm.controls[controlName]
    return control.invalid && control.touched
  }

}
