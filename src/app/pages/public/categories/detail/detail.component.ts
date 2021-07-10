import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  title: string = '';

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('category') || '';
  }

}
