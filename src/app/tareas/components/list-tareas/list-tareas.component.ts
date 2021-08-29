import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tarea } from '../../../models/tarea.interface';
import { TareaService } from '../../../core/tarea.service';
import { ShowFormService } from '../../../core/show-form.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component( {
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: [ './list-tareas.component.scss' ],
  animations: [
    trigger( 'contenidoAnimable', [
      state( 'initial', style( {
        opacity: 1,
        transform: 'rotate3d(0,0,0,0deg)'
      } ) ),
      state( 'final', style( {
        opacity: 0,
        visibility: 'hidden',
        transform: 'rotate3d(5,10,20,30deg)'
      } ) ),
      transition( 'initial => final', animate( 1000 ) ),
      transition( 'final => inicial', animate( 1000 ) ),
    ] )
  ]
} )
export class ListTareasComponent implements OnInit, OnDestroy {

  state = 'initial';

  private suscription = new Subscription();

  tareas: Tarea[] = [];

  constructor(
    private tareaService: TareaService,
    private showFormService: ShowFormService
  ) { }

  ngOnInit(): void {
    this.tareaService.tareas$.subscribe( tareas => this.tareas = tareas );
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  showUpdateForm( tarea: Tarea ) {
    this.showFormService.showFormUpdateValue( true );
    this.tareaService.selectTareState( tarea );
  }

  eliminar( index: string ) {
    this.state = 'final';
    this.tareaService.eliminarTodo( index );
  }

  complete( index: string ) {
    this.tareaService.tareacompletada( index );
  };
}
