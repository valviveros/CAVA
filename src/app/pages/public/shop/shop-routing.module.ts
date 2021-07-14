import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShopComponent } from "./shop.component";

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    pathMatch: 'full',
    data: {
      title: 'Tienda'
    }
  },
  {
    path: ':id',
    component: ShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class ShopRoutingModule {}
