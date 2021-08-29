import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { categories } from 'src/app/user';

@Component( {
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: [ './list-category.component.scss' ]
} )
export class ListCategoryComponent implements OnInit, OnDestroy {

  private suscriptions = new Subscription();

  scroll$ = fromEvent( document, 'scroll' );

  showFixed = false;
  categories = categories;


  constructor() { }

  ngOnInit(): void {
    this.onScreoll();
  }

  ngOnDestroy(): void {

    this.suscriptions.unsubscribe();
  }

  onScreoll() {
    this.suscriptions.add( this.scroll$.subscribe( ( resp: any ) => {
      const { scrollTop } = resp.target.documentElement;
      const newShow = scrollTop > 200;
      this.showFixed = newShow;
    } ) );
  };

}
