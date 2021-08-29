import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { MaterialModule } from '../material/material.module';
import { LogoCompoenent } from './logo/logo.components';



@NgModule( {
  declarations: [
    CategoryComponent,
    PhotoCardComponent,
    LogoCompoenent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CategoryComponent,
    PhotoCardComponent,
    LogoCompoenent
  ]
} )
export class ComponentsModule { }
