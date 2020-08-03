import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category:Array<any>;
  constructor() {
    this.category = [
      {id:1,name:"Bancos"},
      {id:2,name:"Agua"},
      {id:3,name:"Telecomunicaciones"},
      {id:4,name:"Electricidad"},
      {id:5,name:"Peluquerías"},
    ];
   }
}
