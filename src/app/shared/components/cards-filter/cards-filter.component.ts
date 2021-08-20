import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cards-filter',
  templateUrl: './cards-filter.component.html',
  styleUrls: ['./cards-filter.component.scss']
})
export class CardsFilterComponent implements OnInit {
  countMore: number = 0;
  @Output() filter = new EventEmitter();
  filterValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  dropDownOptions() {
    const query: string = '.cardsFilterContainer .cardsFilterOptionsContainer';
    const cardsFilter: any = document.querySelector(query);

    if (this.countMore == 0) {
      this.countMore = 1;
      cardsFilter.style.transform = 'scale(1)';
      cardsFilter.style.opacity = 1;
    } else {
      this.countMore = 0;
      cardsFilter.style.transform = 'scale(0)';
      cardsFilter.style.opacity = 0;
    }
  }

  filterOptionClicked(optionNumber: number) {
    switch (optionNumber) {
      case 1:
        $('.optionTextSelected').html('Principales');
        this.dropDownOptions();
        this.filterValue = '';
        this.filter.emit(this.filterValue);
        break;
      
      case 2:
        $('.optionTextSelected').html('Todos A-Z');
        this.dropDownOptions();
        this.filterValue = 'Alfabético';
        this.filter.emit(this.filterValue);
        break;

      case 3:
        $('.optionTextSelected').html('Empresas');
        this.dropDownOptions();
        this.filterValue = 'Empresa';
        this.filter.emit(this.filterValue);
        break;

      case 4:
        $('.optionTextSelected').html('Emprendimientos');
        this.dropDownOptions();
        this.filterValue = 'Emprendimiento';
        this.filter.emit(this.filterValue);
        break;

      default:
        break;
    }
  } 
}
