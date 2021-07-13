import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'categories',
    loadChildren: () => import('./pages/public/categories/categories.module').then(
      (m) => m.CategoriesModule
    )
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/public/search/search.module').then(
      (m) => m.SearchModule
    )
  },
  {
    path: 'advertise',
    loadChildren: () => import('./pages/public/advertise/advertise.module').then(
      (m) => m.AdvertiseModule
    )
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/public/about-us/about-us.module').then(
      (m) => m.AboutUsModule
    )
  },
  {
    path: 'login',
    loadChildren: () => import('./backoffice/public/login/login.module').then(
      (m) => m.LoginModule
    )
  },
  {
    path: 'register',
    loadChildren: () => import('./backoffice/public/register/register.module').then(
      (m) => m.RegisterModule
    )
  },
  {
    path: 'sellers',
    loadChildren: () => import('./backoffice/private/back-office-home/back-office-home.module').then(
      (m) => m.BackOfficeHomeModule
    )
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
