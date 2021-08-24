import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/models/todo.interface';

@Injectable( {
  providedIn: 'root'
} )
export class TodoService {

  public todos$ = new BehaviorSubject<Todo[]>( [] );
  private todoList: Todo[] = [];



  constructor() {
    this.todoList = JSON.parse( localStorage.getItem( 'todo' )! ) || [];
    this.todos$.next( this.todoList );
  }

  agregarTodo( todo: string ) {
    const newTodo: Todo = {
      text: todo,
      completed: false
    };
    this.todoList.push( newTodo );
    this.todos$.next( this.todoList );
    localStorage.setItem( 'todo', JSON.stringify( this.todoList ) );
  };

  eliminarTodo( text: string ) {
    const index = this.todoList.findIndex( item => item.text === text );
    this.todoList.splice( index, 1 );
    this.todos$.next( this.todoList );
    localStorage.setItem( 'todo', JSON.stringify( this.todoList ) );
  };

  upateTodo( todo: Todo, id: string ) {
    const index = this.todoList.findIndex( item => item.text === id );
    this.todoList = this.todoList.map( ( item, i ) => {
      if ( index === i ) {
        item = todo;
      }
      return item;
    } );
    this.todos$.next( this.todoList );
    localStorage.setItem( 'todo', JSON.stringify( this.todoList ) );
  }

  serchTodo( text: string ) {
    if ( text.length > 0 ) {
      this.todoList = this.todoList.filter( item => {
        const todoText = item.text.toLocaleLowerCase();
        const searchText = text.toLocaleLowerCase();
        return todoText.includes( searchText );
      } );
      this.todos$.next( this.todoList );
    } else {
      this.todoList = JSON.parse( localStorage.getItem( 'todo' )! ) || [];
      this.todos$.next( this.todoList );
    }
  }

  completeTodo( text: string ) {
    this.todoList = this.todoList.map( item => {
      if ( item.text === text ) {
        item.completed = !item.completed;
      }
      return item;
    } );
    this.todos$.next( this.todoList );
    localStorage.setItem( 'todo', JSON.stringify( this.todoList ) );

  }
}
