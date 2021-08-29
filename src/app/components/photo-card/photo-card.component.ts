import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component( {
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: [ './photo-card.component.scss' ]
} )
export class PhotoCardComponent implements OnInit {

  showPhot: boolean = false;

  @ViewChild( 'photo', { static: true } ) photo!: ElementRef<HTMLDivElement>;

  @Input() id: string = "";
  @Input() like: number = 0;
  @Input() src: string = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";


  constructor() { }

  ngOnInit(): void {
    this.observ();
  }

  observ() {
    const observer = new window.IntersectionObserver( ( entries: any ) => {
      const { isIntersecting } = entries[ 0 ];
      if ( isIntersecting ) {
        console.log( 'si' );
        this.showPhot = true;
        observer.disconnect();
      }
    } );
    observer.observe( this.photo.nativeElement );
  }
}
