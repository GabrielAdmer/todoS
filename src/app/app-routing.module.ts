import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    children: [
      { path: "todo", loadChildren: () => import( "./todo/todo.module" ).then( m => m.TodoModule ) },
      { path: "tareas", loadChildren: () => import( "./tareas/tareas.module" ).then( m => m.TareasModule ) },
      { path: "bandas", loadChildren: () => import( "./bandas/bandas.module" ).then( m => m.BandasModule ) },
      { path: "practica", loadChildren: () => import( "./practica/practica.module" ).then( m => m.PracticaModule ) },
      { path: "**", redirectTo: "tareas" }
    ]
  }
];


@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }