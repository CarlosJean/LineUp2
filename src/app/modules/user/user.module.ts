import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { UserDataComponent } from './user-data/user-data.component';


@NgModule({
  declarations: [HeaderComponent,UserDataComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
