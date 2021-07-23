import { Component, OnInit } from '@angular/core';
import { ShopCompanyI } from 'src/app/shared/interfaces/ShopCompanyI';
import { ProductListI } from 'src/app/shared/interfaces/ProductListI';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  active: number = 0;
  companies: Array<ShopCompanyI> = [
    {
      companyBackground: "/assets/img/FondoAdidas.jpg",
      companyLogo: "/assets/img/LogoAdida.png",
      companyInfo: "Empezamos en un lavadero y conquistamos el mundo. Y en el medio, hemos marcado un gran gol y, a veces, hemos tenido problemas para alcanzar nuestros objetivos. Hemos hecho todo lo posible para lo mejor. Hemos mejorado y crecido. Mirando hacia el futuro, recordando siempre de dónde venimos.",
      webLink: "https://www.adidas.co/",
      whatsapp: "3162555666",
      instagram: "adidasco",
      /*facebook: "adidas",
      mail: "adidasco@hotmail.com",*/

    }
  ]
  products: Array<ProductListI> =[
    {
      productphoto: "/assets/img/Cuadrada1.jpg",
      productTitle: "producto 1",
      productInfo: "esta es la informacion del producto1",
    },
    {
      productphoto: "/assets/img/Cuadrada2.jpg",
      productTitle: "producto 2",
      productInfo: "esta es la informacion del producto2",
    },
    {
      productphoto: "/assets/img/Zapatos2.png",
      productTitle: "producto 3",
      productInfo: "esta es la informacion del producto 3",
    }
  ]

  showDiv = {
    contact : false,
    product : true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
