import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".cardsFilterOptionsContainer").css("top", "72.5%");
  }

}
