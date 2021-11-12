import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-adverse-media',
  templateUrl: './search-adverse-media.component.html',
  styleUrls: ['./search-adverse-media.component.css']
})
export class SearchAdverseMediaComponent  {

  constructor() { }
  @Input() showSearchAdverseMedia: boolean =false;
  @Input() noresults:false;
  // searchAdverseMedia:boolean = false;
  ngOnInit(): void {
  }

}
