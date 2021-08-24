import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from '../../../core/todo.service';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';

@Component( {
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.scss' ]
} )
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.todoService.todos$.subscribe( resp => this.todos = resp );
  }

  eliminarTodo( value: string ) {
    this.todoService.eliminarTodo( value );
  }

  openUpdate( todo: Todo ) {
    const openDialog = this.dialog.open( UpdateTodoComponent, { width: '400px', data: todo } );
    openDialog.afterClosed().subscribe( ( resp ) => {
      if ( !resp ) return console.log( 'no se pudo' );
      this.todoService.upateTodo( resp, todo.text );
    } );
  }

  completedTodo( value: string ) {
    this.todoService.completeTodo( value );
  }

}
