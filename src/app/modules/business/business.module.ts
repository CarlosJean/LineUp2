import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { SidebarComponent } from 'src/app/shared/business/configuration/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { BusinessConfigurationComponent } from './business-configuration/business-configuration.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';


@NgModule({
  declarations: [BusinessConfigurationComponent,SidebarComponent,HeaderComponent,UserListComponent,UserCreateComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
