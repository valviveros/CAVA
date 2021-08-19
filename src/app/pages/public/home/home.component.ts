import { Component, OnInit, ViewChild } from '@angular/core';
import '@angular/localize/init';
import { Router } from '@angular/router';
import { Shop } from 'src/app/shared/interfaces/Shop';
import { AngularFireDatabase } from '@angular/fire/database';
import { CarouselComponent } from 'angular-responsive-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active: number = 1;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1279/452`);
  imagenes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => `https://picsum.photos/500/900?random=${n}`);
  imagenesCarousel = [0, 1, 2, 3, 4, 5, 6].map((n) => `https://picsum.photos/1279/452?random=${n}`);
  
  ventures: Array<Shop> = [];
  enterprises: Array<Shop> = [];
  companies: Array<Shop> = [];
  //carousel: Array<Shop> = this.companies.slice(0, 5);

  
  id: string = '';
  name: string = '';
  description: string = '';
  logo: string = '';
  banner: string = '';
  cellphoneNumber!: number;
  email: string = '';
  website: string = '';
  type: string = '';
  category: string = '';
  products: any[] = [];
  whatsapp: string = '';
  instagram: string = '';
  facebook: string = '';
  
  produtId: string = '';
  productName: string = '';
  productDescription: string = '';
  productPrice!: number;
  productImg: string = '';
  
  
  constructor(private router: Router, private firebase: AngularFireDatabase) {}

  @ViewChild(CarouselComponent) sliderCarousel!: CarouselComponent;
  
  async ngOnInit() {
    this.sendShop();
  }

  loadCategoryPage(category: string) {
    this.router.navigate([`/categories/${category}`]);
  }

  async sendShop() {

    await this.firebase.database.ref('companies').once('value', (companies) => {
      companies.forEach((company) => {
        const childKey = company.key;
        const childData = company.val();
        this.companies.push(childData);
        if (childData.type == 'Emprendimiento') {
          this.ventures.push(childData);
        } else {
          this.enterprises.push(childData);
        }
      });
      this.sliderCarousel.resize();
    });
  }
}
