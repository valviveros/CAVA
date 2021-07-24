import { NgModule } from "@angular/core";
import { AngularFireAuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { Routes, RouterModule } from "@angular/router";
import { BackOfficeHomeComponent } from "./back-office-home.component";
import { AddProductComponent } from "./sections/add-product/add-product.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { MyProfileComponent } from "./sections/my-profile/my-profile.component";
import { ProductsComponent } from "./sections/products/products.component";

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
