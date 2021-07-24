import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeHomeRoutingModule } from './back-office-home-routing.module';
import { MyProfileComponent } from './sections/my-profile/my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './sections/add-product/add-product.component';
import { ProductsComponent } from './sections/products/products.component';
import { ContactComponent } from './sections/contact/contact.component';



@NgModule({
  declarations: [
    MyProfileComponent,
    AddProductComponent,
    ProductsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackOfficeHomeRoutingModule
  ]
})
export class BackOfficeHomeModule { }
