import { Component, OnInit, HostListener } from '@angular/core';
import { ShopCompanyI } from 'src/app/shared/interfaces/ShopCompanyI';
import { Shop } from 'src/app/shared/interfaces/Shop';
import { ProductListI } from 'src/app/shared/interfaces/ProductListI';
import { Product } from 'src/app/shared/interfaces/Product';
//import { ShopType } from 'src/app/shared/interfaces/ShopType';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  active: number = 0;
  companies: Array<Shop> = [
    {
      id: "1",
      name: "Adidas",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta aliquet ultricies felis ullamcorper interdum. Elementum ut senectus nisl varius quis proin sem mattis dapibus, praesent eros a dignissim orci lectus volutpat pellentesque vivamus, magna condimentum rutrum gravida.",
      logo: "/assets/img/LogoAdida.png",
      banner: "/assets/img/FondoAdidas.jpg",
      //phone_numbers: Array<"string">,
      email: "string",
      website: "string",
      //type: ShopType,
      //category: Array<string>,
      //products: Array<Product>,
      whatsapp: "string", 
      instagram: "string",
      facebook: "string"
    }
  ]

  products: Array<Product>=[
    {
      id: "2",
      name: "Producto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta aliquet ultricies felis ulla",
      price: 2500,
      img: "/assets/img/Cuadrada2.jpg",
      //categories: Array<string>, 
    },
    {
      id: "1",
      name: "Zapatotes Negros Adidas Calida 2020",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin gravida diam proin gravida di",
      price: 125000,
      img: "/assets/img/Cuadrada1.jpg",
      //categories: Array<string>, 
    },
    {
      id: "1",
      name: "Zapatotes Negros Adidas Calida 2020",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin gravida diam proin gravida di",
      price: 125000,
      img: "/assets/img/Cuadrada1.jpg",
      //categories: Array<string>, 
    },
    {
      id: "1",
      name: "Zapatotes Negros Adidas Calida 2020",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin gravida diam proin gravida di",
      price: 125000,
      img: "/assets/img/Cuadrada1.jpg",
      //categories: Array<string>, 
    } 
  ]

  showDiv = {
    contact : false,
    product : true
  }

  constructor() { }

  ngOnInit(): void {
    this.onScroll();
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
