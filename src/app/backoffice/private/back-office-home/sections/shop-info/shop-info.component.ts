import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductListI } from 'src/app/shared/interfaces/ProductListI';
import { ShopCompanyI } from 'src/app/shared/interfaces/ShopCompanyI';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss']
})
export class ShopInfoComponent implements OnInit {
  companyName: string = 'Nombre negocio';
  companyDescription: string = '';
  categorySelected = [
    { id: 1, name: 'Categoría' },
  ];
  selected = [
    { id: 1, name: 'Tipo negocio' },
  ];
  logoImage: string = '';
  backgImage: string = '';
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
  active: number = 0;


  products: Array<ProductListI> = []

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth, private firebase: AngularFireDatabase, private firebaseStorage: AngularFireStorage, private formBuilder: FormBuilder) {
    this.loadCompanyInfo();
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

  loadCompanyInfo() {
    let Key: any;
    let products: any;

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
                    if (infoChildKey == 'logo') {
                      this.logoImage = infoChildData;
                    }
                    if (infoChildKey == 'banner') {
                      this.backgImage = infoChildData;
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

  goToAddInfo() {
    this.router.navigate(['/sellers/shopinfo/add']);
  }

  goToContact() {
    this.router.navigate(['/sellers/contact']);
  }

  getPath(event: any) {
    this.path = event.target.files[0]
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
}