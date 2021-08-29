import { Injectable, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class BandasService extends Socket implements OnDestroy {

  online$ = new BehaviorSubject<boolean>( false );
  onBandas$ = new BehaviorSubject<any>( null );

  constructor(
  ) {
    super( {
      url: "http://localhost:3000", options: {
        transports: [ 'websocket' ]
      }
    } );
    this.connect();
  }

  ngOnDestroy(): void {
    this.ioSocket.off( 'bandas-from-server' );
  }

  getBandas() {
    this.ioSocket.on( 'bandas-from-server', ( data: any ) => {
      this.onBandas$.next( data );
    } );
  }

  setOnline() {
    this.online$.next( this.ioSocket.connected );
  }

  connect() {
    this.ioSocket.on( 'connect', () => {
      this.online$.next( true );
    } );

    this.ioSocket.on( 'disconnect', () => {
      this.online$.next( false );
    } );
  }


  votar( id: string ) {
    this.ioSocket.emit( 'votar-bandas', id );
  }

  removeBanda( id: string ) {
    this.ioSocket.emit( 'remove-bandas', id );
  }

  updateBanda( id: string, name: string ) {
    this.ioSocket.emit( 'cambiar-nombre', { name, id } );
  }

  addBanda( name: string ) {
    this.ioSocket.emit( 'add-banda', name );
  };
}
