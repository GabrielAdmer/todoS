import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowFormService } from '../../../core/show-form.service';
import { TareaService } from '../../../core/tarea.service';
import { v4 as uuid } from 'uuid';
import { Tarea } from 'src/app/models/tarea.interface';


@Component( {
  selector: 'app-agregar-form',
  templateUrl: './agregar-form.component.html',
  styleUrls: [ './agregar-form.component.scss' ]
} )
export class AgregarFormComponent implements OnInit {

  myForm: FormGroup = this.fb.group( {
    text: [ , [ Validators.required ] ],
    fecha: [ , [ Validators.required ] ]
  } );

  get text() {
    return this.myForm.get( 'text' );
  }

  get fecha() {
    return this.myForm.get( 'fecha' );
  }

  constructor(
    private fb: FormBuilder,
    private showFormService: ShowFormService,
    private tareaService: TareaService
  ) { }

  ngOnInit(): void {

  }

  enviarFormulario() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    const newTarea: Tarea = {
      id: uuid(),
      completed: false,
      text: this.text?.value,
      fecha: this.fecha?.value
    };


    this.tareaService.crearTarea( newTarea );
    this.showFormService.showFormValue( false );
  }

  cancelarFomulario() {
    this.showFormService.showFormValue( false );
  }

}
