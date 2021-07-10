import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { SearchComponent } from './pages/public/search/search.component';
import { AdvertiseComponent } from './pages/public/advertise/advertise.component';
import { AboutUsComponent } from './pages/public/about-us/about-us.component';
import { LoginComponent } from './backoffice/public/login/login.component';
import { RegisterComponent } from './backoffice/public/register/register.component';
import { BackOfficeHomeComponent } from './backoffice/private/back-office-home/back-office-home.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectAuthorizedToSellers = () => redirectLoggedInTo(['sellers']);

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'categories',
    loadChildren: () => import('./pages/public/categories/categories.module').then(
      (m) => m.CategoriesModule
    )
  },
  // { path: 'search', component: SearchComponent },
  // { path: 'advertise', component: AdvertiseComponent },
  // { path: 'aboutus', component: AboutUsComponent },
  // { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectAuthorizedToSellers } },
  // { path: 'register', component: RegisterComponent },
  // { path: 'sellers', component: BackOfficeHomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
