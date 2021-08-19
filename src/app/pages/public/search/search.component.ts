import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CompanyCardI } from 'src/app/shared/interfaces/CompanyCardI';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  active: number = 2;
  shops: Array<CompanyCardI> = [];
  searchword: string = '';

  constructor(private firebase: AngularFireDatabase) { }

  ngOnInit(): void {
    this.loadShops('');
  }

  async loadShops(searchShop: string) {
    await this.firebase.database.ref('companies').once('value', (companies) => {
      this.shops = [];
      companies.forEach((company) => {
        const childKey = company.key;
        const childData = company.val();
        if (searchShop == 'Alfabético') {
          this.shops.push(childData);
          this.shops.sort((a, b) => a.name.localeCompare(b.name));
        } else if (searchShop == 'Empresa') {
          if (childData.type == searchShop) {
            this.shops.push(childData);
          }
        } else if (searchShop == 'Emprendimiento') {
          if (childData.type == searchShop) {
            this.shops.push(childData);
          }
        } else if (searchShop) {
          let childDataName = (childData.name).toLowerCase();
          let searchShopName = searchShop.toLowerCase();
          if (childDataName == searchShopName) {
            $('.noResultsFound').css('display', 'none');
            this.shops.push(childData);
          } else if (this.shops.length == 0) {
            $('.noResultsFound').css('display', 'block');
          }
        } else if (searchShop == '') {
          $('.noResultsFound').css('display', 'none');
          this.shops.push(childData);
        } 
      });
    });
  }

  searchThis(event: any) {
    this.searchword = event.target.value;
    this.loadShops(this.searchword);
  }

}
