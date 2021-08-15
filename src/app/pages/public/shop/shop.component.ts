import { Component, OnInit, HostListener } from '@angular/core';
import { ShopCompanyI } from 'src/app/shared/interfaces/ShopCompanyI';
import { Shop, ShopType } from 'src/app/shared/interfaces/Shop';
import { ProductListI } from 'src/app/shared/interfaces/ProductListI';
import { Product } from 'src/app/shared/interfaces/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  active: number = 0;
  id: string = '';
  imagenesCarousel = [0,1,2,3,4,5,6,7,8,9].map((n) => `https://picsum.photos/215/215?random=${n}`);
  companies: Array<Shop> = [
    {
      id: '1',
      name: 'Adidas',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta aliquet ultricies felis ullamcorper interdum. Elementum ut senectus nisl varius quis proin sem mattis dapibus, praesent eros a dignissim orci lectus volutpat pellentesque vivamus, magna condimentum rutrum gravida.',
      logo: '',
      banner: '',
      cellphoneNumber: 3177301913,
      email: 'adidas@gmail.com',
      website: 'www.adidas.co',
      type: 'Emprendimiento',
      category: 'Moda',
      products: [
        {
          name: 'Tennis Hombre',
          description: 'Tennis Hombre color azul, blanco y naranja.',
          price: 300000,
          img: 'https://firebasestorage.googleapis.com/v0/b/cava-ruvi.appspot.com/o/products%2F1628953371407?alt=media&token=08a31a8f-d3e4-4b04-819e-e0cda8487dc0'
        }
      ],
      whatsapp: '3177301913',
      instagram: 'adidasco',
      facebook: 'adidasco'
    },
  ]

  products: Array<Product> = [
    {
      name: "Producto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin gravida diam proin.",
      price: 2500,
      img: "/assets/img/Cuadrada2.jpg",
    },
    {
      name: "Producto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin gravida diam proin.",
      price: 2500,
      img: "/assets/img/Cuadrada2.jpg",
    }
  ]
  
  showDiv = {
    contact : false,
    product : true,
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('shop') || '';
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
