import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyCardI } from 'src/app/shared/interfaces/CompanyCardI';
import * as $ from 'jquery';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  active: number = 0;
  category: string = '';
  categoryBanners = [
    { name: 'Belleza', src: '/assets/img/categoryBeauty.svg'},
    { name: 'Moda', src: '/assets/img/categoryFashion.png'},
    { name: 'Tecnología', src: '/assets/img/categoryTechnology.png'},
    { name: 'Hogar', src: '/assets/img/categoryHome.png'},
  ];
  categoryBanner: string = '';
  shops: Array<CompanyCardI> = [];

  constructor(private route: ActivatedRoute, private firebase: AngularFireDatabase) { }

  ngOnInit(): void {
    this.category = this.getCategory();
    for (let i = 0; i < this.categoryBanners.length; i++) {
      if (this.categoryBanners[i].name == this.category) {
        this.categoryBanner = this.categoryBanners[i].src;
      }
    }
    this.loadShopsByCategory(this.category, '');
    this.onScroll();
    const query: string = '.wrapper .cardsFilterOptionsContainer';
    const cardsFilter: any = document.querySelector(query);
    cardsFilter.style.top = "565px";
  }

  getCategory(): string {
    return this.route.snapshot.paramMap.get('category') || '';
  }

  async loadShopsByCategory(category: string, searchShop: string) {
    await this.firebase.database.ref('companies').once('value', (companies) => {
      this.shops = [];
      companies.forEach((company) => {
        const childKey = company.key;
        const childData = company.val();
        if (childData.category == category) {
          if (searchShop == 'Alfabético') {
            this.shops.push(childData);
            this.shops.sort((a, b) => a.name.localeCompare(b.name));
          } else if (searchShop == 'Empresa') {
            if (childData.type == searchShop) {
              this.shops.push(childData);
            }
          } else if (searchShop == 'Emprendimiento') {
            if (childData.type == searchShop) {
              this.shops.push(childData);
            }
          } else if (searchShop == '') {
            this.shops.push(childData);
          }
        }
      });
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.pageYOffset != 0) {
      $(".navBar").css("background", "#f0f5fa");
    } else {
      $(".navBar").css("background", "none");
    }
  }

}
