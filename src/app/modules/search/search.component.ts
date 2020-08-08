import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/data/category.service';
import { BusinessService } from '../../services/data/business.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  title:string = 'Búsqueda';
  searchInput:string = '';
  list:Array<any>;

  constructor(private _activatedRoute:ActivatedRoute, private _data:BusinessService, private _categoryService:CategoryService) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((param)=>{
     this.search(param);
    });    
  }
  
  search(params:any){   

    /* 
      q = query;
      c = category;
    */  
   
    if(params.c != undefined){      
      /* Encontrar la categoria que el usuario seleccionó */
        let category = this._categoryService.category.find(category => category.id == params.c);
        this.title   = category.name;   

      /* Encontrar establecimientos por categoría */
      this.list = this._data.business.filter(establishment => establishment.category == params.c);
    }
    
    if(params.q != undefined){
      this.searchInput = params.q.toLowerCase();

      this.list = this._data.business.filter(establishment => {
        /* Normalización de los strings */
        let name      = this.normalize(establishment.name);
        let category  = this.normalize(establishment.category.toString());
        let address   = this.normalize(establishment.address);
        /* Normalización de los strings */

        if( name.includes(this.searchInput) || category.includes(this.searchInput) || address.includes(this.searchInput) ) {
          return establishment
        }
      });
      this.title = 'Búsqueda';
    }   
    
    /* Ordenar por la cantidad menor de personas */
    this.list.sort((a,b)=>a.numberOfPeople - b.numberOfPeople);
    /* Ordenar por la cantidad menor de personas */
  }

  normalize(input:string){
  /* Esta función normaliza los strings para quitarles las tildes, eñes y ponerlos en minúsculas */   
    return input.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
  }


}
