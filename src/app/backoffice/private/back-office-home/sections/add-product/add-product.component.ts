import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
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
  productForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth, private firebase: AngularFireDatabase, private firebaseStorage: AngularFireStorage, private formBuilder: FormBuilder) {
    this.productForm = this.createProfileForm();
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

  goToMyProducts() {
    this.router.navigate(['/sellers/products']);
  }

  goToContact() {
    this.router.navigate(['/sellers/contact']);
  }

  getPath(event:any){
    this.path = event.target.files[0]
  }

  createProfileForm(): FormGroup {
    return this.formBuilder.group(
      {
        name: [
          null,
          Validators.compose([
            Validators.required
          ])
        ],
        description: [
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ],
        price: [
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

    if (this.productForm.valid) {

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

        const fileName = '/products/'+Date.now();

        let uploadTask = await this.firebaseStorage.upload(fileName,this.path)
        let url = await uploadTask.ref.getDownloadURL();
        console.log(url)
        this.firebase.database.ref(`users/${Key}/company/products`).push({
          name: this.productForm.controls.name.value,
          description: this.productForm.controls.description.value,
          price: this.productForm.controls.price.value,
          image: url
        })

        const query: string = '.wrapper #successMessage';
        const successMessage: any = document.querySelector(query);
        successMessage.style.display = 'flex';

        this.resetForm();

        setTimeout(() => {
          successMessage.style.display = 'none';
          this.router.navigate(['/sellers/products']);
        }, 1000);


      }));

    }
    else {
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

  validateField(controlName:string): boolean{
    let control = this.productForm.controls[controlName]
    return control.invalid && control.touched
  }

}
