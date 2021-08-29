import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BandasService } from '../../../core/bandas.service';

@Component( {
  selector: 'app-band-add',
  templateUrl: './band-add.component.html',
  styleUrls: [ './band-add.component.scss' ]
} )
export class BandAddComponent implements OnInit {

  nombre = new FormControl( '', [ Validators.required ] );

  constructor(
    private bandasService: BandasService
  ) { }

  ngOnInit(): void {
  }

  addBanda() {
    if ( this.nombre.invalid ) {
      this.nombre.markAsTouched();
      return;
    }

    this.bandasService.addBanda( this.nombre.value );
    this.nombre.reset();
  }

}
