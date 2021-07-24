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
      companyInfo: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean gravida diam proin, dictumst vehicula fames curabitur porta aliquet ultricies felis ullamcorper interdum. Elementum ut senectus nisl varius quis proin sem mattis dapibus, praesent eros a dignissim orci lectus volutpat pellentesque vivamus, magna condimentum rutrum gravida consequat venenatis eu ac. Sociis fusce facilisi25",
      webLink: "https://www.adidas.co/",
      whatsapp: "3162555666",
      instagram: "adidasco",
      facebook: "adidas",
      mail: "adidasco@hotmail.com",

    }
  ]
  products: Array<ProductListI> =[
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
      productphoto: "/assets/img/Zapatos2.png",
      productTitle: "producto 3",
      productInfo: "esta es la informacion del producto 3",
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  showDiv = {
    contact : false,
    product : true
  }
  

}
