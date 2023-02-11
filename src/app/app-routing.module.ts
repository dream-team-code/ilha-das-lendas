import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'times', loadChildren: () => import('./pages/teams/teams.module').then(m => m.TeamsModule) },
  { path: 'cartas', loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
