import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTicketRoutingModule } from './create-ticket-routing.module';
import { SearchHeaderComponent } from '../shared/search-header/search-header.component';
import { CreateTicketComponent } from './create-ticket.component';


@NgModule({
  declarations: [CreateTicketComponent,SearchHeaderComponent],
  imports: [
    CommonModule,
    CreateTicketRoutingModule,
  ]
})
export class CreateTicketModule { }
