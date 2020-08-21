import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchHeaderComponent } from '../../shared/search-header/search-header.component';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [HomePage,SearchHeaderComponent]
})
export class HomePageModule {
  
}
