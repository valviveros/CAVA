import { Injectable } from '@angular/core';
import { Shop } from '../interfaces/Shop';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CreateShopService {

  constructor(private firebase: AngularFireDatabase) { }
  async sendShop() {

    await this.firebase.database.ref('companies').once('value', (companies) => {
      companies.forEach((company) => {
        const childKey = company.key;
        const childData = company.val();
        console.log(childKey, childData )
        company.forEach((data) => {
          const dataChildKey = data.key;
          const dataChildData = data.val();
          //console.log(dataChildKey, dataChildData)
        /*if (childData.email == this.Email) {
          Key = childKey;
          user.forEach((info => {
            const infoChildKey = info.key;
            const infoChildData = info.val();
            if (infoChildKey == 'id') {
              this.id = infoChildData;
            }
          }));
        }*/
      
      });
    });
  })
}}
