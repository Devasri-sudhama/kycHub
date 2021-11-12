
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
dataSize:number
  constructor() { 
    
  }
  @Input() showSearchResults:boolean = false;
  @Input() tableData:any
  @Input() noresults:boolean = false;
  @Input() resultsData:boolean = false;
  @Input() individual:boolean = false;
  @Input() onboarding:boolean = false;
  ngOnInit(): void {

  }

}
