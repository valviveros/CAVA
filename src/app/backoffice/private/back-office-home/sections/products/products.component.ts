import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/Product';
import { ProductListI } from 'src/app/shared/interfaces/ProductListI';
import { ShopCompanyI } from 'src/app/shared/interfaces/ShopCompanyI';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
  myProfileInfoForm: FormGroup;
  active: number = 0;

  products: Array<Product> =[]

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth, private firebase: AngularFireDatabase, private firebaseStorage: AngularFireStorage, private formBuilder: FormBuilder) {
    this.myProfileInfoForm = this.createProfileForm();
    this.loadProductsInfo()
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

  loadProductsInfo() {
    let Key: any;
    let products: any;

    this.firebaseAuth.user.subscribe((async (data) => {
      this.user = data;
      this.Email = this.user['email'];
      this.sellersName = this.user['displayName'];

      await this.firebase.database.ref('users').once('value', (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == this.Email) {
            Key = childKey;

            user.forEach((info => {
              const infoChildKey = info.key;
              if(infoChildKey == 'company'){

                info.forEach((company => {
                  const companyKey = company.key;
                  if(companyKey == 'products'){
                    const productsData = company.val();

                    this.products = Object.entries(productsData).map((pair: any) => {

                      let key = pair[0]
                      let product = pair[1]

                      return {
                        id: key,
                        img: product.image,
                        name: product.name,
                        description: product.description,
                        price: product.price
                      }
                    })
                  }

                }))
              }

              const infoChildData = info.val();
            }));
          }
        });
      });


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

  goToAddProducts(){
    this.router.navigate(['/sellers/products/add']);
  }

  goToContact(){
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
            Validators.required
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
            }
          });
        });

        const fileName = '/file'+Math.random()+this.user['email'];

        this.firebaseStorage.upload(fileName,this.path).then(() =>{
          this.firebase.database.ref(`users/${Key}/company/products`).push({
            name: this.myProfileInfoForm.controls.name.value,
            description: this.myProfileInfoForm.controls.description.value,
            price: this.myProfileInfoForm.controls.price.value,
            image: fileName
          })
        })


      }));

      const query: string = '.wrapper #successMessage';
      const successMessage: any = document.querySelector(query);
      successMessage.style.display = 'flex';

      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
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
    let control = this.myProfileInfoForm.controls[controlName]
    return control.invalid && control.touched
  }

}
