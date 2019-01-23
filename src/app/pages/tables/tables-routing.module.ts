import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { ApartmentTableComponent } from './apartment-table/apartment-table.component';
import { ResidentTableComponent } from './resident-table/resident-table.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
  },
  {
    path: 'apartment-table',
    component: ApartmentTableComponent,
  },
  {
    path: 'resident-table',
    component: ResidentTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  ApartmentTableComponent,
  ResidentTableComponent,
];
