import { Component, OnInit } from '@angular/core';
import '@angular/localize/init';
import { Router } from '@angular/router';
import { Shop } from 'src/app/shared/interfaces/Shop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active: number = 1;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1279/452`);
  imagenes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((n) => `https://picsum.photos/500/900?random=${n}`);
  imagenesCarousel = [0,1,2,3,4,5,6].map((n) => `https://picsum.photos/1279/452?random=${n}`);
  ventures: Array<Shop> = [
    {
      id: '1',
      name: 'Adidas',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta aliquet ultricies felis ullamcorper interdum. Elementum ut senectus nisl varius quis proin sem mattis dapibus, praesent eros a dignissim orci lectus volutpat pellentesque vivamus, magna condimentum rutrum gravida.',
      logo: 'https://firebasestorage.googleapis.com/v0/b/cava-ruvi.appspot.com/o/info%2F1628977877522logo?alt=media&token=5bf95518-8c6d-43a8-8796-3a4c57eb67bc',
      banner: 'https://firebasestorage.googleapis.com/v0/b/cava-ruvi.appspot.com/o/info%2F1628977877522background?alt=media&token=5ec2ec47-5f26-4bac-a0eb-b9ab6d0bdaa4',
      cellphoneNumber: 3177301913,
      email: 'adidas@gmail.com',
      website: 'www.adidas.co',
      type: 0,
      category: 'Moda',
      products: [
        {
          id: '1',
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
    {
      id: '2',
      name: 'Camilo Adidas',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta aliquet ultricies felis ullamcorper interdum. Elementum ut senectus nisl varius quis proin sem mattis dapibus, praesent eros a dignissim orci lectus volutpat pellentesque vivamus, magna condimentum rutrum gravida.',
      logo: 'https://firebasestorage.googleapis.com/v0/b/cava-ruvi.appspot.com/o/info%2F1628977877522logo?alt=media&token=5bf95518-8c6d-43a8-8796-3a4c57eb67bc',
      banner: 'https://firebasestorage.googleapis.com/v0/b/cava-ruvi.appspot.com/o/info%2F1628977877522background?alt=media&token=5ec2ec47-5f26-4bac-a0eb-b9ab6d0bdaa4',
      cellphoneNumber: 3177301913,
      email: 'adidas@gmail.com',
      website: 'www.adidas.co',
      type: 0,
      category: 'Moda',
      products: [
        {
          id: '1',
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadCategoryPage(category: string) {
    this.router.navigate([`/categories/${category}`]);
  }

}
