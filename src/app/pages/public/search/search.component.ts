import { Component, OnInit } from '@angular/core';
import { CompanyCardI } from 'src/app/shared/interfaces/CompanyCardI';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  active: number = 2;
  companies: Array<CompanyCardI> = [ 
    {
    companyLogo : "/assets/img/companyLogo1.svg",
    companyName : "Agro Dinero",
    companyPhoto : "/assets/img/companyPhoto1.svg"
    },
    {
      companyLogo : "/assets/img/companyLogo2.svg",
      companyName : "Deluna's Dream",
      companyPhoto : "/assets/img/companyPhoto2.svg"
    },
    {
      companyLogo : "/assets/img/companyLogo1.svg",
      companyName : "Agro Dinero",
      companyPhoto : "/assets/img/companyPhoto1.svg"
    },
    {
      companyLogo : "/assets/img/companyLogo2.svg",
      companyName : "Deluna's Dream",
      companyPhoto : "/assets/img/companyPhoto2.svg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
