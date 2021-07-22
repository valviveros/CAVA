import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeHomeRoutingModule } from './back-office-home-routing.module';
import { MyProfileComponent } from './sections/my-profile/my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackOfficeHomeRoutingModule
  ]
})
export class BackOfficeHomeModule { }
