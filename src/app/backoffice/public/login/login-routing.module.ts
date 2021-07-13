import { NgModule } from "@angular/core";
import { AngularFireAuthGuard, redirectLoggedInTo } from "@angular/fire/auth-guard";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";

const redirectAuthorizedToSellers = () => redirectLoggedInTo(['sellers']);

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    pathMatch: 'full',
    data: {
      title: 'Login',
      authGuardPipe: redirectAuthorizedToSellers
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class LoginRoutingModule {}
