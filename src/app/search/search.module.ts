import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchHeaderComponent } from '../shared/search-header/search-header.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchHeaderComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
