import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { CategoriesRoutingModule } from './categories-routing.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
