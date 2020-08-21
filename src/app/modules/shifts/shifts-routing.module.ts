import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ShiftsComponent } from './shifts.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { ShiftCreateComponent } from './shift-create/shift-create.component';
import { ShiftsListComponent } from './shifts-list/shifts-list.component';


const routes: Routes = [
  {path:'list',component:ShiftsListComponent},
  //{path:'shifts',redirectTo:'list',pathMatch:'full'},
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'create/:id',component:ShiftCreateComponent},
  {path:'details/:idTurno',component:ShiftDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftsRoutingModule { }
