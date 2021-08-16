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
    { id: 1, name: 'Emprendimiento' },
    { id: 2, name: 'Empresa' }
  ];
  selected = [
    { id: 1, name: 'Emprendimiento' },
  ];
  categoryItems = [
    { id: 1, name: 'Belleza' },
    { id: 2, name: 'Moda' },
    { id: 3, name: 'Tecnología' },
    { id: 4, name: 'Hogar' },
  ];
  categorySelected = [
    { id: 1, name: 'Belleza' },
  ];
  @Input() sellersName: string = '';
  Email: any;
  sellersLName: string = '';
  path: string = '';
  path2: string = '';
  password: string = '';
  id: any;
  cellphoneNumber: any;
  countMore: number = 0;
  user: any;
  clicked: number = 0;
  infoForm: FormGroup;
  companyName: string = '';
  companyDescription: string = '';

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
            user.forEach((company => {
              const companyChildKey = company.key;
              const companyChildData = company.val();
              company.forEach((data => {
                const dataChildKey = data.key;
                if (dataChildKey == 'info') {
                  data.forEach((info => {
                    const infoChildKey = info.key;
                    const infoChildData = info.val();
                    if (infoChildKey == 'name') {
                      this.companyName = infoChildData;
                    }
                    if (infoChildKey == 'description') {
                      this.companyDescription = infoChildData;
                    }
                    if (infoChildKey == 'category') {
                      this.categorySelected = [
                        { id: 1, name: infoChildData },
                      ];
                    }
                    if (infoChildKey == 'type') {
                      this.selected = [
                        { id: 1, name: infoChildData },
                      ];
                    }
                  }));  
                }
              }));
              if (companyChildKey == 'name') {
                this.sellersName = companyChildData;
                this.user.updateProfile({
                  displayName: this.sellersName
                });
              }
            }));
          }
        });
      });
      this.infoForm.controls.name.setValue(this.companyName);
      this.infoForm.controls.description.setValue(this.companyDescription);
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
    this.path = event.target.files[0];
  }

  getPath2(event: any) {
    this.path2 = event.target.files[0];
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
            Validators.maxLength(335)
          ])
        ],
        category: [
          null,
          Validators.compose([
            Validators.required
          ])
        ],
        type: [
          null,
          Validators.compose([
            Validators.required
          ])
        ],
        logo: [
          null,
          Validators.compose([
            // Validators.required
          ])
        ],
        banner: [
          null,
          Validators.compose([
            // Validators.required
          ])
        ],
      }
    )
  }

  onSubmit() {
    let Key: any;

    if (this.infoForm.valid) {

      this.firebaseAuth.user.subscribe((async (data) => {
        this.user = data;
        this.Email = this.user['email'];
        
        await this.firebase.database.ref('users').once('value', (users) => {
          users.forEach((user) => {
            const childKey = user.key;
            const childData = user.val();
            if (childData.email == this.Email) {
              Key = childKey;
            }
          });
        });

        const companyId = this.infoForm.controls.name.value + Key;

        this.firebase.database.ref(`users/${Key}/company`).update({
          id: companyId
        });

        this.firebase.database.ref(`companies/${Key}`).update({
          id: companyId
        });

        const fileName = '/info/' + Date.now() + 'logo';
        const fileName2 = '/info/' + Date.now() + 'background';
        let url;
        let url2;

        if (this.path && this.path2) {
          let uploadTask = await this.firebaseStorage.upload(fileName, this.path);
          let uploadTask2 = await this.firebaseStorage.upload(fileName2, this.path2);
          url = await uploadTask.ref.getDownloadURL();
          url2 = await uploadTask2.ref.getDownloadURL();

          this.firebase.database.ref(`users/${Key}/company/info`).update({
            name: this.infoForm.controls.name.value,
            description: this.infoForm.controls.description.value,
            category: this.infoForm.controls.category.value,
            type: this.infoForm.controls.type.value,
            logo: url,
            banner: url2
          });
          
          this.firebase.database.ref(`companies/${Key}`).update({
            name: this.infoForm.controls.name.value,
            description: this.infoForm.controls.description.value,
            category: this.infoForm.controls.category.value,
            type: this.infoForm.controls.type.value,
            logo: url,
            banner: url2
          });
        } else if (this.path) {
          let uploadTask = await this.firebaseStorage.upload(fileName, this.path);
          url = await uploadTask.ref.getDownloadURL();

          this.firebase.database.ref(`users/${Key}/company/info`).update({
            name: this.infoForm.controls.name.value,
            description: this.infoForm.controls.description.value,
            category: this.infoForm.controls.category.value,
            type: this.infoForm.controls.type.value,
            logo: url
          });

          this.firebase.database.ref(`companies/${Key}`).update({
            name: this.infoForm.controls.name.value,
            description: this.infoForm.controls.description.value,
            category: this.infoForm.controls.category.value,
            type: this.infoForm.controls.type.value,
            logo: url
          });
        } else if (this.path2) {
          let uploadTask2 = await this.firebaseStorage.upload(fileName2, this.path2);
          url2 = await uploadTask2.ref.getDownloadURL();

          this.firebase.database.ref(`users/${Key}/company/info`).update({
            name: this.infoForm.controls.name.value,
            description: this.infoForm.controls.description.value,
            category: this.infoForm.controls.category.value,
            type: this.infoForm.controls.type.value,
            banner: url2
          });

          this.firebase.database.ref(`companies/${Key}`).update({
            name: this.infoForm.controls.name.value,
            description: this.infoForm.controls.description.value,
            category: this.infoForm.controls.category.value,
            type: this.infoForm.controls.type.value,
            banner: url2
          });
        } else {
          this.firebase.database.ref(`users/${Key}/company/info`).update({
            name: this.infoForm.controls.name.value,
            description: this.infoForm.controls.description.value,
            category: this.infoForm.controls.category.value,
            type: this.infoForm.controls.type.value
          });

          this.firebase.database.ref(`companies/${Key}`).update({
            name: this.infoForm.controls.name.value,
            description: this.infoForm.controls.description.value,
            category: this.infoForm.controls.category.value,
            type: this.infoForm.controls.type.value
          });
        }

        this.loadSellersInfo();

        const query: string = '.wrapper #successMessage';
        const successMessage: any = document.querySelector(query);
        successMessage.style.display = 'flex';

        setTimeout(() => {
          successMessage.style.display = 'none';
          this.router.navigate(['/sellers/shopinfo']);
        }, 1000);
      }));
    } else {
      const query: string = '.wrapper #failureMessage';
      const failureMessage: any = document.querySelector(query);
      failureMessage.style.display = 'flex';

      setTimeout(() => {
        failureMessage.style.display = 'none';
      }, 3000);
    }
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