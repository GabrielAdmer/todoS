import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../../core/todo.service';
import { debounceTime } from 'rxjs/operators';

@Component( {
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: [ './todo-search.component.scss' ]
} )
export class TodoSearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  searchTodo = new FormControl( '', [ Validators.required ] );

  constructor(
    private todoService: TodoService
  ) { }


  ngOnInit(): void {
    this.searchTodo.valueChanges.pipe(
      debounceTime( 500 )
    ).subscribe( resp => {
      this.todoService.serchTodo( resp );
    } );
  }


}
