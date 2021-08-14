import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cards-filter',
  templateUrl: './cards-filter.component.html',
  styleUrls: ['./cards-filter.component.scss']
})
export class CardsFilterComponent implements OnInit {
  countMore: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  dropDownOptions() {
    const query: string = '.cardsFilterContainer .cardsFilterOptionsContainer';
    const cardsFilter: any = document.querySelector(query);

    if (this.countMore == 0) {
      this.countMore = 1;
      cardsFilter.style.transform = "scale(1)";
      cardsFilter.style.opacity = 1;
    } else {
      this.countMore = 0;
      cardsFilter.style.transform = "scale(0)";
      cardsFilter.style.opacity = 0;
    }
  }

  sortingCards(sortNumber: number){
    switch(sortNumber){
      case 1:
        console.log("Principales");
        break;
      case 2:
        console.log("alphabethic");
        break;

    }

  }

  filterOptionClicked(optionNumber: number) {
    switch (optionNumber) {
      case 1:
        $(".optionTextSelected").html("Principales");
        this.dropDownOptions();
        this.sortingCards(1);
        break;
      
      case 2:
        $(".optionTextSelected").html("Todos A-Z");
        this.dropDownOptions();
        this.sortingCards(2);
        break;

      case 3:
        $(".optionTextSelected").html("Empresas");
        this.dropDownOptions();
        break;

      case 4:
        $(".optionTextSelected").html("Emprendimientos");
        this.dropDownOptions();
        break;

      case 5:
        $(".optionTextSelected").html("Menor precio");
        this.dropDownOptions();
        break;

      case 6:
        $(".optionTextSelected").html("Mayor precio");
        this.dropDownOptions();
        break;

      default:
        break;
    }
  } 
}
