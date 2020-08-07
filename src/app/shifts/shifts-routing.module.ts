import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShiftsComponent } from './shifts.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
/* import { ShiftCreateComponent } from './shift-create/shift-create.component'; */


const routes: Routes = [
  {path:'',component:ShiftsComponent},
  //{path:'shifts/create/:id',component:ShiftCreateComponent},
  {path:'detalle-turno/:idTurno',component:ShiftDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftsRoutingModule { }
