import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TableComponent } from './components/table/table.component';
import { RowTableComponent } from './components/row-table/row-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TeamsComponent,
    TableComponent,
    RowTableComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TeamsModule { }
