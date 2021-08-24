import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component( {
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: [ './create-button.component.scss' ]
} )
export class CreateButtonComponent implements OnInit {

  @Output() onOpen: EventEmitter<boolean> = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  };

  onOpenDialog() {
    this.onOpen.emit( true );
  }

}
