import { Component, OnInit, HostListener } from '@angular/core';
import { Shop } from 'src/app/shared/interfaces/Shop';
import { Product } from 'src/app/shared/interfaces/Product';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  active: number = 0;
  id: string = '';
  imagenesCarousel = [0,1,2,3,4,5,6,7,8,9].map((n) => `https://picsum.photos/215/215?random=${n}`);
  shops: Array<Shop> = [];
  products: Array<Product> = [];
  
  showDiv = {
    contact : false,
    product : true,
  }

  constructor(private route: ActivatedRoute, private firebase: AngularFireDatabase) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.loadShop(this.id);
    this.onScroll();
  }

  async loadShop(id: string) {
    await this.firebase.database.ref('companies').once('value', (companies) => {
      companies.forEach((company) => {
        const childKey = company.key;
        const childData = company.val();
        if (childData.id == id) {
          this.shops.push(childData);
          company.forEach((info) =>{
            const productChildData = info.val();
            info.forEach((items) =>{
              const itemsChildData = items.val();
              this.products.push(itemsChildData);
            })
          })
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
