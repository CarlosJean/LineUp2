import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent implements OnInit {

  @Input() title:string;
  
  constructor(private _route:Router) { }

  ngOnInit() {}

  search(input:any){
    this._route.navigate(['/search'],{queryParams:{q:input}});
  }

}
