import { NgModule } from "@angular/core";
import { AngularFireAuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { Routes, RouterModule } from "@angular/router";
import { BackOfficeHomeComponent } from "./back-office-home.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class BackOfficeHomeRoutingModule {}
