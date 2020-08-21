import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'search',
    loadChildren:()=>import('./modules/search/search.module').then(m=>m.SearchModule)
  },
  {
    path:'shifts',
    loadChildren: ()=>import('./modules/shifts/shifts.module').then(m=>m.ShiftsModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then( m => m.UserModule)
  },
  {
    path:'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
