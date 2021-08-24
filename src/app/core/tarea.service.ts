import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from '../models/tarea.interface';

@Injectable( {
  providedIn: 'root'
} )
export class TareaService {

  private _tareasState: BehaviorSubject<Tarea[]> = new BehaviorSubject<Tarea[]>( [] );
  private taresStateList: Tarea[] = [];

  private tareState: BehaviorSubject<Tarea> = new BehaviorSubject<Tarea>( { id: undefined, completed: null!, fecha: null!, text: null! } );

  get tareas$() {
    return this._tareasState.asObservable();
  }

  get tarea$() {
    return this.tareState.asObservable();
  }

  // set tareState( tarea: Tarea ) {
  //   this.taresStateList.push( tarea );
  //   this._tareasState.next( this.taresStateList );
  // }

  constructor() {
    this.taresStateList = JSON.parse( localStorage.getItem( 'tareas' )! ) || [];
    this._tareasState.next( this.taresStateList );
  }

  selectTareState( tarea: Tarea ) {
    this.tareState.next( tarea );
  }

  crearTarea( tarea: Tarea ) {
    this.taresStateList.push( tarea );
    this._tareasState.next( this.taresStateList );
    this.actulizarTareaLocalStorage( this.taresStateList );
  }

  updateTarea( tarea: Tarea, index: string ) {
    this.taresStateList = this.taresStateList.map( item => {
      if ( item?.id === index ) {
        item = tarea;
      }
      return item;
    } );
    this.actulizarTareaLocalStorage( this.taresStateList );
  }


  actulizarTareaLocalStorage( value: Tarea[] ) {
    this._tareasState.next( value );
    localStorage.setItem( 'tareas', JSON.stringify( value ) );
  }

  buscarTarea( value: string ) {
    if ( value.length > 0 ) {
      this.taresStateList = this.taresStateList.filter( item => {
        const todoText = item.text.toLocaleLowerCase();
        const searchText = value.toLocaleLowerCase();
        return todoText.includes( searchText );
      } );
      this._tareasState.next( this.taresStateList );
    } else {
      this.taresStateList = JSON.parse( localStorage.getItem( 'tareas' )! ) || [];
      this._tareasState.next( this.taresStateList );
    }
  }

  tareacompletada( id: string ) {
    this.taresStateList = this.taresStateList.map( item => {
      if ( item.id === id ) {
        item.completed = !item.completed;
      }
      return item;
    } );
    this.actulizarTareaLocalStorage( this.taresStateList );
  }

  eliminarTodo( id: string ) {
    this.taresStateList = this.taresStateList.filter( item => item.id !== id );
    this.actulizarTareaLocalStorage( this.taresStateList );
  }

  tareasCompletadas() {
    const tareasCompletadas = this.taresStateList.filter( item => item.completed === true );
    this._tareasState.next( tareasCompletadas );
  }

  tareasIncompletas() {
    const Incompletas = this.taresStateList.filter( item => item.completed === false );
    this._tareasState.next( Incompletas );
  }

  tareasAll() {
    const todos = this.taresStateList;
    this._tareasState.next( todos );

  }
}
