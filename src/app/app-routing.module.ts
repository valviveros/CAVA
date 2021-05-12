import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { SearchComponent } from './pages/public/search/search.component';
import { AboutUsComponent } from './pages/public/about-us/about-us.component';
import { LoginComponent } from './backoffice/public/login/login.component';
import { RegisterComponent } from './backoffice/public/register/register.component';
import { BackOfficeHomeComponent } from './backoffice/private/back-office-home/back-office-home.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AdvertiseComponent } from './pages/public/advertise/advertise.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectAuthorizedToSellers = () => redirectLoggedInTo(['sellers']);

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'advertise', component: AdvertiseComponent },
  { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectAuthorizedToSellers } },
  { path: 'register', component: RegisterComponent },
  { path: 'sellers', component: BackOfficeHomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
