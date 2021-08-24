import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.interface';
import { TareaService } from '../../../core/tarea.service';

@Component( {
  selector: 'app-header-tarea',
  templateUrl: './header-tarea.component.html',
  styleUrls: [ './header-tarea.component.scss' ]
} )
export class HeaderTareaComponent implements OnInit {

  tareas: Tarea[] = [];

  constructor(
    private tareaService: TareaService
  ) { }

  ngOnInit(): void {
    this.tareaService.tareas$.subscribe( tareas => this.tareas = tareas );
  }

  completadas() {
    this.tareaService.tareasCompletadas();
  }

  incompletas() {
    this.tareaService.tareasIncompletas();
  }

  all() {
    this.tareaService.tareasAll();
  }
}
