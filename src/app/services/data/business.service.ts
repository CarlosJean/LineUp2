import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  public business:Array<any>;
  constructor() {
    this.business = [
      {id:1,name:'Salón Karen',address:'c. Edison Ditren',category:5,numberOfPeople:5, 
      services:[
        {id:1,name:'Masaje'},
        {id:2,name:'Uñas'},
        {id:3,name:'Peluquería'},
      ]},
      {id:2,name:'Productos Karen',address:'c. Edison Ditren',category:5,numberOfPeople:3, services:[{id:1,name:'Ventas'}]},
    ];
   }
}
