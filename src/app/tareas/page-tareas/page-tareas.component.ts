import { Component, OnInit } from '@angular/core';
import { ShowFormService } from '../../core/show-form.service';

@Component( {
  selector: 'app-page-tareas',
  templateUrl: './page-tareas.component.html',
  styleUrls: [ './page-tareas.component.scss' ]
} )
export class PageTareasComponent implements OnInit {

  show: boolean = false;
  showUpdate: boolean = false;

  constructor(
    private showFormService: ShowFormService
  ) { }

  ngOnInit(): void {
    this.showFormService.showForm$.subscribe( show => this.show = show );
    this.showFormService.showFormUpdate$.subscribe( showUpdate => this.showUpdate = showUpdate );
  }


}
