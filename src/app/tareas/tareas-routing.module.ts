import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTareasComponent } from './page-tareas/page-tareas.component';

const routes: Routes = [
  {
    path: "", component: PageTareasComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class TareasRoutingModule { }
