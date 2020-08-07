import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftsRoutingModule } from './shifts-routing.module';
import { ShiftsComponent } from './shifts.component';
import { SearchHeaderComponent } from '../shared/search-header/search-header.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { FormsModule } from '@angular/forms';
import { ShiftCreateComponent } from './shift-create/shift-create.component';


@NgModule({
  declarations: [SearchHeaderComponent,ShiftsComponent,ShiftDetailsComponent,ShiftCreateComponent],
  imports: [
    CommonModule,
    ShiftsRoutingModule,
    FormsModule
  ]
})
export class ShiftsModule { }
