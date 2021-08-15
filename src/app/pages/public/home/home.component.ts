import { Component, OnInit } from '@angular/core';
import '@angular/localize/init';
import { Router } from '@angular/router';
import { Shop } from 'src/app/shared/interfaces/Shop';
import { AngularFireDatabase } from '@angular/fire/database';


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
      type: 'Emprendimiento',
      category: 'Moda',
      products: [
        {
          //id: '1',
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
      type: 'Empremdimiento',
      category: 'Moda',
      products: [
        {
          //id: '1',
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
  enterprise: Array<Shop> = []
  

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
  products: [] = [];
  whatsapp: string = '';
  instagram: string = '';
  facebook: string = '';

  produtId: string = '';
  productName: string = '';
  productDescription: string = '';
  productPrice!: number;
  productImg: string = '';


  constructor(private router: Router, private firebase: AngularFireDatabase) { 
    this.sendShop();
  }

  ngOnInit(): void {
  }

  loadCategoryPage(category: string) {
    this.router.navigate([`/categories/${category}`]);
  }

  async sendShop() {

    let venture:any = {};
    let product:any = {};

    await this.firebase.database.ref('companies').once('value', (companies) => {
      companies.forEach((company) => {
        const childKey = company.key;
        const childData = company.val();
        //console.log(childKey, childData )
        company.forEach((data) => {
          const dataChildKey = data.key;
          const dataChildData = data.val();
          //console.log(dataChildKey, dataChildData)
          if (dataChildKey == 'id'){
            this.id = dataChildData;
          }
          if (dataChildKey == 'products'){
            data.forEach((product) => {
              product.forEach((pInfo) => {
                const productChildKey = pInfo.key;
                const productChildData = pInfo.val();
                //console.log(productChildKey, productChildData)
                if (productChildKey == 'name'){
                  this.productName = productChildData;
                }
                if (productChildKey == 'description'){
                  this.productDescription = productChildData;
                }
                if (productChildKey == 'price'){
                  this.productPrice = productChildData;
                }
                if (productChildKey == 'image'){
                  this.productImg = productChildData;
                }
              })
            })
            product.name  = this.productName;
            product.description = this.productDescription;
            product.price = this.productPrice; 
            product.img = this.productImg;
            venture.products = product;
            console.log(venture)
            
          }
          data.forEach((info) => {
            const infoChildKey = info.key;
            const infoChildData = info.val();
            //console.log(infoChildKey, infoChildData) 
            if (infoChildKey == 'name'){
              this.name = infoChildData;
            }
            if (infoChildKey == 'logoImage'){
              this.logo = infoChildData;
            }
            if (infoChildKey == 'backgImage'){
              this.banner = infoChildData;
            }
            if (infoChildKey == 'shoptype'){
              this.type = infoChildData;
            }
            if (infoChildKey == 'whatsapp'){
              this.cellphoneNumber = infoChildData;
            }
            if (infoChildKey == 'contactEmail'){
              this.email = infoChildData;
            }
            if (infoChildKey == 'webpage'){
              this.website = infoChildData;
            }
            if (infoChildKey == 'category'){
              this.category = infoChildData;
            }
            if (infoChildKey == 'whatsapp'){
              this.whatsapp = infoChildData;
            }
            if (infoChildKey == 'instagram'){
              this.instagram = infoChildData;
            }
            if (infoChildKey == 'facebook'){
              this.facebook = infoChildData;
            }
          });
      });
      
      venture.id  = this.id;
      venture.name = this.name;
      venture.logo = this.logo; 
      venture.banner = this.banner; 
      venture.type = this.type;  
      // this.logo, this.banner, this.type
      //console.log(venture)
    });
  })
}
  
}
