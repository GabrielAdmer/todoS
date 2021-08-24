import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tarea } from '../../../models/tarea.interface';
import { TareaService } from '../../../core/tarea.service';
import { ShowFormService } from '../../../core/show-form.service';

@Component( {
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: [ './list-tareas.component.scss' ]
} )
export class ListTareasComponent implements OnInit, OnDestroy {

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
    this.tareaService.eliminarTodo( index );
  }

  complete( index: string ) {
    this.tareaService.tareacompletada( index );
  };
}
