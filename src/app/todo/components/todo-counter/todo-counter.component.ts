import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from '../../../core/todo.service';

@Component( {
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: [ './todo-counter.component.scss' ]
} )
export class TodoCounterComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.todos$.pipe(
    ).subscribe( reso => this.todos = reso );
  }

}
