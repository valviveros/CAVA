import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyCardI } from 'src/app/shared/interfaces/CompanyCardI';
import * as $ from 'jquery';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  active: number = 0;
  title: string = '';
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
    }
  ]

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('category') || '';
    this.onScroll();
    const query: string = '.wrapper .cardsFilterOptionsContainer';
    const cardsFilter: any = document.querySelector(query);
    cardsFilter.style.top = "565px";
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
