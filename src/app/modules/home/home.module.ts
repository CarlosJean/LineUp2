import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { BusinessTilesComponent } from 'src/app/shared/business-tiles/business-tiles.component';
import { BusinessDashboardComponent } from 'src/app/shared/business-dashboard/business-dashboard.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [HomePage,HeaderComponent,BusinessTilesComponent,BusinessDashboardComponent]
})
export class HomePageModule {
  
}
