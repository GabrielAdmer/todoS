import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component( {
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: [ './form-create.component.scss' ]
} )
export class FormCreateComponent implements OnInit {

  todo = new FormControl( '', [ Validators.required, Validators.minLength( 3 ) ] );

  constructor(
    public dialogRef: MatDialogRef<FormCreateComponent>,
  ) { }

  ngOnInit(): void {

  }

  createTodo() {
    if ( this.todo.invalid ) {
      this.todo.markAsTouched();
      return;
    }

    this.dialogRef.close( this.todo.value );
  }

  updateTodo() { }

}
