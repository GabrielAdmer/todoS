import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-list-photo-card',
  templateUrl: './list-photo-card.component.html',
  styleUrls: [ './list-photo-card.component.scss' ]
} )
export class ListPhotoCardComponent implements OnInit {


  photoCard = [ 1, 2, 3, 4, 5, 6 ];

  constructor() { }

  ngOnInit(): void {

  }

}
