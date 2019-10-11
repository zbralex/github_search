import { Pipe, PipeTransform } from '@angular/core';
import { SearchPersonService } from '../services/search-person.service';

@Pipe({
  name: 'personTitle'
})
export class PersonTitlePipe implements PipeTransform {

  transform(persons: SearchPersonService, searchTerm: string): any {
    if (!searchTerm) {
      return persons;
    }
    return persons.filter((persons: SearchPersonService) => {
      return `${persons.id}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
