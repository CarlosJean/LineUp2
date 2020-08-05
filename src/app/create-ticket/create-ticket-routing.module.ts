import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './create-ticket.component';


const routes: Routes = [{path:'',component:CreateTicketComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTicketRoutingModule { }
