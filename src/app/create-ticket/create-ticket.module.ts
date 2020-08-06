import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTicketRoutingModule } from './create-ticket-routing.module';
import { SearchHeaderComponent } from '../shared/search-header/search-header.component';
import { CreateTicketComponent } from './create-ticket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateTicketComponent,SearchHeaderComponent],
  imports: [
    CommonModule,
    CreateTicketRoutingModule,
    FormsModule
  ]
})
export class CreateTicketModule { }
