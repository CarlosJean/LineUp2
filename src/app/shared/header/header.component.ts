import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title:string;
  @Input() searchInput:boolean;
  
  constructor(private _route:Router) { 
    this.searchInput = false;
  }

  ngOnInit() {}

  search(input:any){
    this._route.navigate(['/search'],{queryParams:{q:input}});
  }
}
