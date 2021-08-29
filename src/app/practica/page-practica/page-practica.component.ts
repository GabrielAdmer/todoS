import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable, interval, Subscription, timer } from 'rxjs';


export class CrossFieldError implements ErrorStateMatcher {
  isErrorState( control: FormControl | null, form: FormGroupDirective | NgForm | null ): boolean {
    return control?.touched! && form?.hasError( 'no_matchpassword' )!;
  }
}

@Component( {
  selector: 'app-page-practica',
  templateUrl: './page-practica.component.html',
  styleUrls: [ './page-practica.component.scss' ]
} )
export class PagePracticaComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }

}
