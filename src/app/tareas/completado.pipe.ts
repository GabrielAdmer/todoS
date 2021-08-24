import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../models/tarea.interface';

@Pipe( {
  name: 'completed'
} )
export class CompletadodPipe implements PipeTransform {

  transform( todos: Tarea[] ): number {
    const completed = todos.filter( item => item.completed !== false );
    return completed.length;
  }

}
