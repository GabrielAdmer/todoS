import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Pipe( {
  name: 'completed'
} )
export class CompletedPipe implements PipeTransform {

  transform( todos: Todo[] ): number {
    const completed = todos.filter( item => item.completed !== false );
    return completed.length;
  }

}
