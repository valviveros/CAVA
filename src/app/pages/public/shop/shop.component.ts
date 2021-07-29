import { Component, OnInit } from '@angular/core';
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
  /*companies: Array<ShopCompanyI> = [
    {
      companyBackground: "/assets/img/FondoAdidas.jpg",
      companyLogo: "/assets/img/LogoAdida.png",
      companyInfo: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta aliquet ultricies felis ullamcorper interdum. Elementum ut senectus nisl varius quis proin sem mattis dapibus, praesent eros a dignissim orci lectus volutpat pellentesque vivamus, magna condimentum rutrum gravida.", //maximo caracteres 335,
      webLink: "https://www.adidas.co/",
      whatsapp: "3162555666",
      instagram: "adidasco",
      facebook: "adidas",
      mail: "adidasco@hotmail.com",

    }
  ]*/
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
    }
    
  ]
  /*Product: Array<Product> =[
    {
      productphoto: "/assets/img/Cuadrada1.jpg",
      productTitle: "producto 1",
      productInfo: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta aliquet ultricies felis ulla",
    },
    {
      productphoto: "/assets/img/Cuadrada2.jpg",
      productTitle: "Zapatotes Negros Adidas Calida 2020",
      productInfo: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta ali",
    },
    {
      productphoto: "/assets/img/Cuadrada2.jpg",
      productTitle: "Zapatotes Negros Adidas Calida 2020",
      productInfo: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta ali",
    },
    {
      productphoto: "/assets/img/Zapatos2.png",
      productTitle: "producto 3",
      productInfo: "esta es la informacion del producto 3",
    }
  ]*/

  showDiv = {
    contact : false,
    product : true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
