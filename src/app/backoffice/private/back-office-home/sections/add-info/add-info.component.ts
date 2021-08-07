import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {
  items = [
    {id: 1, name: 'Emprendimiento'},
    {id: 2, name: 'Empresa'}
  ];
  selected = [
    { id: 1, name: 'Emprendimiento' },
  ];
  @Input() sellersName: string = '';
  Email: any;
  path: string = '';
  sellersLName: string = '';
  password: string = '';
  id: any;
  cellphoneNumber: any;
  countMore: number = 0;
  user: any;
  clicked: number = 0;
  infoForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth, private firebase: AngularFireDatabase, private firebaseStorage: AngularFireStorage, private formBuilder: FormBuilder) {
    this.infoForm = this.createProfileForm();
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

    this.resetForm();
  }

  loadSellersInfo() {
    this.firebaseAuth.user.subscribe((async (data) => {
      this.user = data;
      this.Email = this.user['email'];
      this.sellersName = this.user['displayName'];
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

  goToShopInfo() {
    this.router.navigate(['/sellers/shopinfo']);
  }

  goToMyProducts() {
    this.router.navigate(['/sellers/products']);
  }

  goToContact() {
    this.router.navigate(['/sellers/contact']);
  }

  getPath(event: any) {
    this.path = event.target.files[0]
  }

  createProfileForm(): FormGroup {
    return this.formBuilder.group(
      {
        name: [
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(35)
          ])
        ],
        description: [
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ],
        shoptype: [
          null,
          Validators.compose([
            Validators.required
          ])
        ],
        category: [
          null,
          Validators.compose([
            Validators.required
          ])
        ],
        image: [
          null,
          Validators.compose([
            Validators.required
          ])
        ],
      }
    )
  }

  onSubmit() {
    let Key: any;
    console.log(this.infoForm);
    // if (this.infoForm.valid) {

    //   this.firebaseAuth.user.subscribe((async (data) => {
    //     this.user = data;
    //     this.Email = this.user['email'];

    //     await this.firebase.database.ref('users').once('value', (users) => {
    //       users.forEach((user) => {
    //         const childKey = user.key;
    //         const childData = user.val();
    //         if (childData.email == this.Email) {
    //           Key = childKey;
    //         }
    //       });
    //     });

    //     const fileName = '/info/' + Date.now();

    //     let uploadTask = await this.firebaseStorage.upload(fileName, this.path)
    //     let url = await uploadTask.ref.getDownloadURL();
    //     console.log(url)
    //     this.firebase.database.ref(`users/${Key}/company/info`).push({
    //       name: this.infoForm.controls.name.value,
    //       description: this.infoForm.controls.description.value,
    //       price: this.infoForm.controls.price.value,
    //       image: url
    //     })

    //     const query: string = '.wrapper #successMessage';
    //     const successMessage: any = document.querySelector(query);
    //     successMessage.style.display = 'flex';

    //     this.resetForm();

    //     setTimeout(() => {
    //       successMessage.style.display = 'none';
    //       this.router.navigate(['/sellers/shopinfo']);
    //     }, 1000);


    //   }));

    // }
    // else {
    //   const query: string = '.wrapper #failureMessage';
    //   const failureMessage: any = document.querySelector(query);
    //   failureMessage.style.display = 'flex';

    //   setTimeout(() => {
    //     failureMessage.style.display = 'none';
    //   }, 3000);
    // }
  }

  resetForm(registerForm?: NgForm) {
    if (registerForm != null) {
      registerForm.reset();
    }
  }

  dropDownOptions() {
    const query: string = '.wrapper .profileOptionsContainer';
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

  validateField(controlName: string): boolean {
    let control = this.infoForm.controls[controlName]
    return control.invalid && control.touched
  }

}