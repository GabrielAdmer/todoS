import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from '../../core/todo.service';
import { FormCreateComponent } from '../components/form-create/form-create.component';

@Component( {
  selector: 'app-page-todo',
  templateUrl: './page-todo.component.html',
  styleUrls: [ './page-todo.component.scss' ]
} )
export class PageTodoComponent implements OnInit {

  public todo: Todo[] = [];
  todoItem = new FormControl( 'todo item', [ Validators.required ] );
  public search: string = '';

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.todos$.subscribe( resp => {
      this.todo = resp;
      console.log( this.todo );
    } );
  }


  openDialogCreate() {
    const dialogRef = this.dialog.open( FormCreateComponent, { width: '300px' } );
    dialogRef.afterClosed().subscribe( resp => {
      if ( !resp ) return console.log( 'cancelado' );
      this.todoService.agregarTodo( resp );
    } );
  }

}
