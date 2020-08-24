import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftsRoutingModule } from './shifts-routing.module';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShiftCreateComponent } from './shift-create/shift-create.component';
import { ShiftsListComponent } from './shifts-list/shifts-list.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { CustomerShiftsComponent } from 'src/app/shared/customer-shifts/customer-shifts.component';
import { BusinessShiftsComponent } from 'src/app/shared/business-shifts/business-shifts.component';


@NgModule({
  declarations: [HeaderComponent,ShiftsListComponent,ShiftDetailsComponent,ShiftCreateComponent,CustomerShiftsComponent,BusinessShiftsComponent],
  imports: [
    CommonModule,
    ShiftsRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class ShiftsModule { }
