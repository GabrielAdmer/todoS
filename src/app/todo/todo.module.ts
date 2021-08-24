import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTodoComponent } from './page-todo/page-todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoCounterComponent } from './components/todo-counter/todo-counter.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { CompletedPipe } from './completed.pipe';

@NgModule( {
  declarations: [
    PageTodoComponent,
    TodoCounterComponent,
    TodoSearchComponent,
    TodoListComponent,
    CreateButtonComponent,
    TodoItemComponent,
    FormCreateComponent,
    UpdateTodoComponent,
    CompletedPipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
} )
export class TodoModule { }
