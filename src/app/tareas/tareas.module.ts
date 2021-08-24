import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { PageTareasComponent } from './page-tareas/page-tareas.component';
import { ButtonAgregarComponent } from './components/button-agregar/button-agregar.component';
import { AgregarFormComponent } from './components/agregar-form/agregar-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTareasComponent } from './components/list-tareas/list-tareas.component';
import { UpdateTareasComponent } from './components/update-tareas/update-tareas.component';
import { BuscarTareaComponent } from './components/buscar-tarea/buscar-tarea.component';
import { HeaderTareaComponent } from './components/header-tarea/header-tarea.component';
import { CompletadodPipe } from './completado.pipe';
import { MaterialModule } from '../material/material.module';


@NgModule( {
  declarations: [
    PageTareasComponent,
    ButtonAgregarComponent,
    AgregarFormComponent,
    ListTareasComponent,
    UpdateTareasComponent,
    BuscarTareaComponent,
    HeaderTareaComponent,
    CompletadodPipe
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
} )
export class TareasModule { }
