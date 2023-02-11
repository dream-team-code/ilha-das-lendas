import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';

const routes: Routes = [
  { path: '',
    children: [
      {
        path: ':id', 
        component: CardsComponent
      },
      {path: '', redirectTo: '/times', pathMatch: 'full'}
    ]  
}
];


@NgModule({
  declarations: [
    CardsComponent,
    DisplayCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CardsModule { }
