import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessConfigurationComponent } from './business-configuration/business-configuration.component';


const routes: Routes = [
  {path:'configuration',component:BusinessConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
