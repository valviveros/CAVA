import { NgModule } from "@angular/core";
import { AngularFireAuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { Routes, RouterModule } from "@angular/router";
import { BackOfficeHomeComponent } from "./back-office-home.component";
import { AddProductComponent } from "./sections/add-product/add-product.component";
import { MyProfileComponent } from "./sections/my-profile/my-profile.component";

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
        component: undefined
      },
      {
        path: 'add',
        component: AddProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeHomeRoutingModule {}
