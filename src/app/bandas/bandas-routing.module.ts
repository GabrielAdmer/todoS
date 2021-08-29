import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBandasComponent } from './page-bandas/page-bandas.component';

const routes: Routes = [
  {
    path: "",
    component: PageBandasComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class BandasRoutingModule { }
