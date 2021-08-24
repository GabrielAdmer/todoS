import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea } from 'src/app/models/tarea.interface';
import { ShowFormService } from '../../../core/show-form.service';
import { TareaService } from '../../../core/tarea.service';

@Component( {
  selector: 'app-update-tareas',
  templateUrl: './update-tareas.component.html',
  styleUrls: [ './update-tareas.component.scss' ]
} )
export class UpdateTareasComponent implements OnInit {

  public tarea!: Tarea;

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
    this.tareaService.tarea$.subscribe( resp => {
      this.tarea = resp;
      this.myForm.reset( resp );
    } );
  }

  enviarFormulario() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    const newTarea: Tarea = {
      id: this.tarea.id,
      completed: false,
      text: this.text?.value,
      fecha: this.fecha?.value
    };

    this.tareaService.updateTarea( newTarea, newTarea.id! );
    this.showFormService.showFormUpdateValue( false );

  }

  cancelarFomulario() {
    this.showFormService.showFormUpdateValue( false );
  }

}
