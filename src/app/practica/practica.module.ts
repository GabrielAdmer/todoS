import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticaRoutingModule } from './practica-routing.module';
import { PagePracticaComponent } from './page-practica/page-practica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { ListPhotoCardComponent } from './components/list-photo-card/list-photo-card.component';


@NgModule( {
  declarations: [
    PagePracticaComponent,
    ListCategoryComponent,
    ListPhotoCardComponent
  ],
  imports: [
    CommonModule,
    PracticaRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
} )
export class PracticaModule { }
