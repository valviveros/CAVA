import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() companyLogo: string = "";
  @Input() companyName: string = "";
  @Input() companyPhoto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
