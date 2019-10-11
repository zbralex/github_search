import { Component, OnInit } from '@angular/core';
import { SearchPersonService } from '../services/search-person.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  persons: any;
  searchTerm: string;
  public persons;

  constructor(private _searchPersons: SearchPersonService) { }

  ngOnInit() {
    this._searchPersons.getPersons()
    .subscribe(persons => {
      this.persons = persons;
      console.log(this.persons)
    });
  }
 
  public searchInput({target}: KeyboardEvent): void {
    this.searchTerm = (target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }
}
