import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegisterService } from './shared/services/register.service';
import { AuthService } from './shared/services/auth.service';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/public/home/home.component';
import { CompanyCardComponent } from './shared/components/company-card/company-card.component';
import { SearchComponent } from './pages/public/search/search.component';
import { AdvertiseComponent } from './pages/public/advertise/advertise.component';
import { AboutUsComponent } from './pages/public/about-us/about-us.component'
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './backoffice/public/login/login.component';
import { RegisterComponent } from './backoffice/public/register/register.component';
import { BackOfficeHomeComponent } from './backoffice/private/back-office-home/back-office-home.component';
import { CardsFilterComponent } from './shared/components/cards-filter/cards-filter.component';
import { CategoriesComponent } from './pages/public/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CompanyCardComponent,
    SearchComponent,
    AdvertiseComponent,
    AboutUsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BackOfficeHomeComponent,
    CardsFilterComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [
    RegisterService,
    AuthService,
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }