import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchData:Array<any>;
  constructor() { 

    this.searchData = [
      {id:1,name:'Salón Karen',address:'c. Edison Ditren',category:5,numberOfPeople:5},
      {id:2,name:'Productos Karen',address:'c. Edison Ditren',category:5,numberOfPeople:3},
    ];
    
  }
}
