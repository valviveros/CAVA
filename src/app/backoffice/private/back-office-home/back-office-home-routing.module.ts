import { NgModule } from "@angular/core";
import { AngularFireAuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { Routes, RouterModule } from "@angular/router";
import { BackOfficeHomeComponent } from "./back-office-home.component";
import { AddInfoComponent } from "./sections/add-info/add-info.component";
import { AddProductComponent } from "./sections/add-product/add-product.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { MyProfileComponent } from "./sections/my-profile/my-profile.component";
import { ProductsComponent } from "./sections/products/products.component";
import { ShopInfoComponent } from "./sections/shop-info/shop-info.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: BackOfficeHomeComponent,
    canActivate: [AngularFireAuthGuard],
    pathMatch: 'full',
    data: {
      title: 'Back office',
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'myprofile',
    component: MyProfileComponent
  },
  {
    path: 'shopinfo',
    children: [
      {
        path: '',
        component: ShopInfoComponent
      },
      {
        path: 'add',
        component: AddInfoComponent
      }
    ]
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeHomeRoutingModule {}
