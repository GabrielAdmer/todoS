import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../../../models/todo.interface';

@Component( {
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: [ './update-todo.component.scss' ]
} )
export class UpdateTodoComponent implements OnInit {

  todo = new FormControl( '', [ Validators.required ] );

  constructor(
    public dialogRef: MatDialogRef<UpdateTodoComponent>,
    @Inject( MAT_DIALOG_DATA ) public data: Todo
  ) { }

  ngOnInit(): void {
    this.todo.reset( this.data.text );
  }

  upadteTodo() {
    const updateTodo: Todo = {
      ...this.data,
      text: this.todo.value
    };

    this.dialogRef.close( updateTodo );
  }


}
