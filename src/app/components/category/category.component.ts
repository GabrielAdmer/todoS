import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [ './category.component.scss' ]
} )
export class CategoryComponent implements OnInit {

  @Input() cover: string = 'https://i.imgur.com/dJa0Hpl.jpg';
  @Input() path: string = '';
  @Input() emoji: string = '?';

  constructor() { }

  ngOnInit(): void {
  }

}
