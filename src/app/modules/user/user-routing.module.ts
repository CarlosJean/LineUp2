import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserConfigurationsComponent } from './user-configurations/user-configurations.component';


const routes: Routes = [
  {path:'',component:UserConfigurationsComponent},
  {path:'user-data',component:UserDataComponent},
  {path:'change-password',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
