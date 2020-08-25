import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { SidebarComponent } from 'src/app/shared/business/configuration/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { BusinessConfigurationComponent } from './business-configuration/business-configuration.component';


@NgModule({
  declarations: [BusinessConfigurationComponent,SidebarComponent,HeaderComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
