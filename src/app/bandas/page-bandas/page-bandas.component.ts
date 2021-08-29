import { Component, OnInit } from '@angular/core';
import { BandasService } from '../../core/bandas.service';

@Component( {
  selector: 'app-page-bandas',
  templateUrl: './page-bandas.component.html',
  styleUrls: [ './page-bandas.component.scss' ]
} )
export class PageBandasComponent implements OnInit {

  online: boolean = false;

  constructor(
    private bandasService: BandasService
  ) { }

  ngOnInit(): void {
    this.bandasService.online$.subscribe( resp => this.online = resp );
  }
  ngOnDestroy(): void {


  }

}
