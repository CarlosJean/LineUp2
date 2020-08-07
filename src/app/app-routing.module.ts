import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShiftCreateComponent } from './shifts/shift-create/shift-create.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchModule)
  },
  /* {
    path: 'createTicket/:id',
    loadChildren: ()=>import('./create-ticket/create-ticket.module').then(m=>m.CreateTicketModule)
  }, */
  {
    path:'shifts/create/:id',
    component:ShiftCreateComponent
    //loadChildren: ()=>import('./shifts/shifts.module').then(m=>m.ShiftsModule)
  }, 
  {
    path:'shifts/:userId',
    loadChildren: ()=>import('./shifts/shifts.module').then(m=>m.ShiftsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
