import { Component, OnInit } from '@angular/core';
import '@angular/localize/init';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
