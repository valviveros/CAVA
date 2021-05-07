import { Component, OnInit } from '@angular/core';
import '@angular/localize/init';
import { CompanyCardI } from 'src/app/shared/interfaces/CompanyCardI';

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
  companies: Array<CompanyCardI> = [
    {
      companyLogo: "/assets/img/companyLogo1.svg",
      companyName: "Agro Dinero",
      companyPhoto: "/assets/img/companyPhoto1.svg"
    },
    {
      companyLogo: "/assets/img/companyLogo2.svg",
      companyName: "Deluna's Dream",
      companyPhoto: "/assets/img/companyPhoto2.svg"
    },
    {
      companyLogo: "/assets/img/companyLogo1.svg",
      companyName: "Agro Dinero",
      companyPhoto: "/assets/img/companyPhoto1.svg"
    },
    {
      companyLogo: "/assets/img/companyLogo2.svg",
      companyName: "Deluna's Dream",
      companyPhoto: "/assets/img/companyPhoto2.svg"
    },
    {
      companyLogo: "/assets/img/companyLogo1.svg",
      companyName: "Agro Dinero",
      companyPhoto: "/assets/img/companyPhoto1.svg"
    },
    {
      companyLogo: "/assets/img/companyLogo2.svg",
      companyName: "Deluna's Dream",
      companyPhoto: "/assets/img/companyPhoto2.svg"
    },
    {
      companyLogo: "/assets/img/companyLogo1.svg",
      companyName: "Agro Dinero",
      companyPhoto: "/assets/img/companyPhoto1.svg"
    },
    {
      companyLogo: "/assets/img/companyLogo2.svg",
      companyName: "Deluna's Dream",
      companyPhoto: "/assets/img/companyPhoto2.svg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
