import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTodoComponent } from './page-todo/page-todo.component';

const routes: Routes = [
  {
    path: "",
    component: PageTodoComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class TodoRoutingModule { }
