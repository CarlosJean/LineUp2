import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftsRoutingModule } from './shifts-routing.module';
import { SearchHeaderComponent } from '../../shared/search-header/search-header.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShiftCreateComponent } from './shift-create/shift-create.component';
import { ShiftsListComponent } from './shifts-list/shifts-list.component';


@NgModule({
  declarations: [SearchHeaderComponent,ShiftsListComponent,ShiftDetailsComponent,ShiftCreateComponent],
  imports: [
    CommonModule,
    ShiftsRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class ShiftsModule { }
