import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessConfigurationComponent } from './business-configuration/business-configuration.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';


const routes: Routes = [
  {path:'configuration',component:BusinessConfigurationComponent},
  {path:'user',component:UserListComponent},
  {path:'user-create',component:UserCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
