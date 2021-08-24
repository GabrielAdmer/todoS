import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ShowFormService {

  private showForm = new BehaviorSubject<boolean>( false );
  private showFormUpdate = new BehaviorSubject<boolean>( false );

  get showForm$() {
    return this.showForm.asObservable();
  }

  get showFormUpdate$() {
    return this.showFormUpdate.asObservable();
  }

  constructor() { }

  showFormValue( value: boolean ) {
    this.showForm.next( value );
  }

  showFormUpdateValue( value: boolean ) {
    this.showFormUpdate.next( value );
  }

}
