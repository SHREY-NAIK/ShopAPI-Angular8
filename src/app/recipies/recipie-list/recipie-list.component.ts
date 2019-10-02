import { Component, OnInit } from '@angular/core';

import { recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: recipie[] = [
    new recipie('TEST', 'EMPTY', 'https://www.fillmurray.com/640/360')
  ];

  constructor() { }

  ngOnInit() {
  }

}
