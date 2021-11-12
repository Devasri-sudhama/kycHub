import { Component, Input, OnInit, Output } from '@angular/core';
import { Individual } from 'src/app/Models/individual.model';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { AmlService } from 'src/app/aml.service';
import { HttpClient } from '@angular/common/http';
import { OnBoarding } from 'src/app/Models/onBoarding.model';
@Component({
  selector: 'app-perform-search',
  templateUrl: './perform-search.component.html',
  styleUrls: ['./perform-search.component.css']
})
export class PerformSearchComponent implements OnInit {
  public showIndividualForm = true;
  public showOnboardingListForm = false;
  individualSearchResults: boolean = false;
  public legalEntitySearchResults = false;
  public showEntitySearch: boolean = false;
  public showOnboardingList: boolean = false;
  firstName: String = "";
  lastName: String = "";
  Country: String = "";
  dateOfBirth: String = "";
  companyName: String = "";
  companyId: String = "";

  jurisdiction: String = "";

  showSearchResults = false;
  errorName: boolean = false;
  searchType: string = 'individual';
  myForm: FormGroup;

  @Input() searchResults: any;
  @Input() tableData: any;
  results = "";
  @Input() resultsData: boolean = false;
  @Input() noresults: boolean = false;
  @Input() individual: boolean = false;
  @Input() onboarding: boolean = false;
  constructor(private aml: AmlService, private http: HttpClient, private fb: FormBuilder) { }
  getIndividualData(individual: Individual) {
    this.individual = true;
    this.onboarding = false;
    let size = 10;
    let page = 0;
    let searchType = "FUZZY"

    let fullname = individual.firstName + " " + individual.lastName
    let name = fullname.split(' ');
    let countries = individual.Country;
    let country: [] = []
    let source: [] = []
    let guid = ""
    let category: [] = []
    let gender: [] = []
    let typeSearch = "Individual"
    let type = typeSearch.split(' ');
    let dateofBirth = individual.dateOfBirth
    var body = {
      "size": size,
      "page": page,
      "searchType": searchType,
      "name": name,
      "country": country,
      "source": source,
      "guid": guid,
      "category": category,
      "gender": gender,
      "type": type,
      "dateofBirth": dateofBirth
    };
    var data = JSON.stringify(body)
    console.log(data)
    this.aml.getIndividualEntityList(body).subscribe(data => {
      this.results = data
      this.searchResults = JSON.stringify(this.results);
      this.searchResults = JSON.parse(this.searchResults);
      this.searchResults = this.searchResults.data.content
      this.tableData = this.searchResults.map((result: any) => {
        const category = result['details'][0]['category']['name']
        const name = result['details'][0]['fullName']
        const source = result['details'][0]['datasource']['dataAgencyName']
        const country = result['details'][0]['nationality']
        const risk = result['details']['riskLevel']
        return { category, name, source, country, risk }


      })
      console.log(this.tableData)
      var dataSize = Object.keys(this.tableData).length;
      if (dataSize == 0) {
        this.noresults = true;
        this.resultsData = false
        this.showSearchResults = true;

      } else {

        this.individualSearchResults = true;
        this.noresults = false;
        this.resultsData = true;
        this.showSearchResults = true;
      }
      console.log(typeof (this.tableData))
    })


  }
  getOnBoardingData(OnBoarding: OnBoarding) {
    this.individual = false;
    this.onboarding = true;
    let size = 10;
    let page = 0;
    let searchType = "FUZZY"
    let name = OnBoarding.companyName.split(' ');
    let country: [] = []
    Array.from(OnBoarding.country);
    // country.push()
    let source: [] = []
    let guid = ""
    let category: [] = []
    let gender: [] = []
    let typeSearch = "Organisation"
    let type = typeSearch.split(' ');
    let jurisdiction = OnBoarding.jurisdiction
    var body = {
      "size": size,
      "page": page,
      "searchType": searchType,
      "name": name,
      "country": country,
      "source": source,
      "guid": guid,
      "category": category,
      "gender": gender,
      "type": type,
      "jurisdiction": jurisdiction
    };
    var data = JSON.stringify(body)
    console.log(data)
    this.aml.getOnBoardingEntityList(body).subscribe(data => {
      this.results = data
      this.searchResults = JSON.stringify(this.results);
      this.searchResults = JSON.parse(this.searchResults);
      this.searchResults = this.searchResults.data.content;
      console.log(this.searchResults)
      this.tableData = this.searchResults.map((result: any) => {
        const category = result['details'][0]['rawData']['category']
        const companyName = result['details'][0]['rawData']['fullName']
        const companyId = result['details'][0]['additionalInfo']
        const type = result['details'][0]['entityType']
        const country = result['details'][0]['rawData']['country']
        const risk = result['details'][0]['rawData']['riskLevel']
        console.log(category + " " + companyName + " " + companyId + " " + country + " " + risk)
        return { category, companyName, type, companyId, country, risk }
      })
      var dataSize = Object.keys(this.tableData).length;
      if (dataSize == 0) {
        this.noresults = true;
        this.resultsData = false;
        this.showSearchResults = true;
      } else {
        this.individualSearchResults = true;
        this.noresults = false;
        this.resultsData = true;
        this.showSearchResults = true;
      }
      console.log(this.tableData)
    })
  }
  submitted = false;
  ngOnInit() {

  }
  change() {
    if (this.searchType == "legalEntity") {
      this.showIndividualForm = false;
      this.showOnboardingListForm = true;
      this.individualSearchResults = false;
      this.showSearchResults = false;

    } else {
      this.showIndividualForm = true;
      this.noresults = false;
      this.showSearchResults = false;
      this.onboarding = false;
      this.showOnboardingListForm = false;
    }
  }
}
