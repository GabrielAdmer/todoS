import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePracticaComponent } from './page-practica/page-practica.component';

const routes: Routes = [
  {
    path: "",
    component: PagePracticaComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class PracticaRoutingModule { }
