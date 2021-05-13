import { Component, OnInit } from '@angular/core';

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
}
