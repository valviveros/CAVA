import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { HomeComponent } from './pages/public/home/home.component';
import { CompanyCardComponent } from './pages/components/company-card/company-card.component';
import { SearchComponent } from './pages/public/search/search.component';
import { AboutUsComponent } from './pages/public/about-us/about-us.component'
import { FooterComponent } from './pages/components/footer/footer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CompanyCardComponent,
    SearchComponent,
    AboutUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
