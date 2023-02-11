import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    BackButtonComponent
  ]
})
export class SharedModule { }
