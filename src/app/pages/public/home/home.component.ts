import { Component, OnInit } from '@angular/core';
import '@angular/localize/init';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active: number = 1;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1279/452`);

  constructor() { }

  ngOnInit(): void {
  }

}
