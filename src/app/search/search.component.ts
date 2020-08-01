import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  title:string = '';
  searchInput:string = '';

  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((param)=>{
     this.search(param);
    });    
  }
  
  search(params:any){
    this.title = 'Búsqueda';
    if(params.category != undefined){
      this.title = params.category.charAt(0).toUpperCase() + params.category.slice(1);
    } 

    this.searchInput = params.q;
    console.log("You searched: "+JSON.stringify(params));
  }

}
