import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule
  ]
})
export class HomeModule { }
