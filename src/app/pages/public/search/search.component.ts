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
    // this.shops.sort((a,b) => a.companyName.localeCompare(b.companyName))
    this.loadShops();
  }

  async loadShops() {
    await this.firebase.database.ref('companies').once('value', (companies) => {
      companies.forEach((company) => {
        const childKey = company.key;
        const childData = company.val();
        this.shops.push(childData);
      });
    });
  }

  searchThis(word: string) {
    this.searchword = word;
    console.log(this.searchword);
  }

}
