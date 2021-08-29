import { Component, OnInit, OnDestroy } from '@angular/core';
import { BandasService } from '../../../core/bandas.service';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
} )
export class ListComponent implements OnInit, OnDestroy {

  private suscriptions = new Subscription();
  band: any[] = [];

  constructor(
    private bandasService: BandasService
  ) { }

  ngOnInit(): void {
    this.bandasService.getBandas();
    this.bandasService.onBandas$.subscribe( bandas => {
      if ( bandas ) {
        this.band = bandas.bandas;
      }
    } );
  }

  ngOnDestroy() {
    this.suscriptions.unsubscribe();
  }

  udate( event: any, id: string ) {
    const e = ( event.target ) as HTMLInputElement;
    const nombre = e.value;
    console.log( nombre );
    console.log( id );

    this.band.map( b => {
      if ( b.id === id ) {
        b.name = nombre;
      }
      return b;
    } );

    this.bandasService.updateBanda( id, nombre );

  }

  votar( id: string ) {
    this.bandasService.votar( id );
  }

  eliminar( id: string ) {
    this.bandasService.removeBanda( id );
  }



}
