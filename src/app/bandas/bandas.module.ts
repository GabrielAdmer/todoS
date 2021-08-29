import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandasRoutingModule } from './bandas-routing.module';
import { PageBandasComponent } from './page-bandas/page-bandas.component';
import { ListComponent } from './components/list/list.component';
import { BandAddComponent } from './components/band-add/band-add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule( {
  declarations: [
    PageBandasComponent,
    ListComponent,
    BandAddComponent
  ],
  imports: [
    CommonModule,
    BandasRoutingModule,
    ReactiveFormsModule
  ]
} )
export class BandasModule { }
