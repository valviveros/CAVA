import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() shopId: any;
  @Input() companyLogo: any;
  @Input() companyName: any;
  @Input() companyPhoto: any;

  constructor() { }

  ngOnInit(): void {
  }

}
