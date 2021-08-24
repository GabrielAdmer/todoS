import { Component, OnInit } from '@angular/core';
import { ShowFormService } from '../../../core/show-form.service';

@Component( {
  selector: 'app-button-agregar',
  templateUrl: './button-agregar.component.html',
  styleUrls: [ './button-agregar.component.scss' ]
} )
export class ButtonAgregarComponent implements OnInit {

  constructor(
    private showFormService: ShowFormService
  ) { }

  ngOnInit(): void {
  }

  showForm() {
    this.showFormService.showFormValue( true );
  }
}
