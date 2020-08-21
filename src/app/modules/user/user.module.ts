import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';


import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserConfigurationsComponent } from './user-configurations/user-configurations.component';


@NgModule({
  declarations: [HeaderComponent,UserDataComponent,ChangePasswordComponent,UserConfigurationsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    IonicStorageModule.forRoot()
  ]
})
export class UserModule { }
