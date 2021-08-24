import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TareaService } from '../../../core/tarea.service';
import { debounceTime } from 'rxjs/operators';

@Component( {
  selector: 'app-buscar-tarea',
  templateUrl: './buscar-tarea.component.html',
  styleUrls: [ './buscar-tarea.component.scss' ]
} )
export class BuscarTareaComponent implements OnInit {

  terminoBuscar = new FormControl( '', [ Validators.required ] );

  constructor(
    private tareaService: TareaService
  ) { }

  ngOnInit(): void {
    this.terminoBuscar.valueChanges.pipe(
      debounceTime( 500 ),
    ).subscribe( value => {
      console.log( value );
      this.tareaService.buscarTarea( value );
    } );
  }



}
