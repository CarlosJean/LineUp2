import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ShiftCreateComponent } from '../shifts/shift-create/shift-create.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent,
    ShiftCreateComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
