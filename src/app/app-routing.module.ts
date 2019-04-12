import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full'
  },
  
  { 
    path: 'pages/login', 
    loadChildren: './pages/login/login.module#LoginPageModule' 
  },
  { 
    path: 'pages/registrar', 
    loadChildren: './pages/registrar/registrar.module#RegistrarPageModule' 
  },
 // { path: 'pages/primeira', loadChildren: './pages/primeira/primeira.module#PrimeiraPageModule' },
  { 
    path: '', 
    loadChildren: './pages/menu/menu.module#MenuPageModule' 
  }
 // { path: 'segunda', loadChildren: './pages/segunda/segunda.module#SegundaPageModule' }

  //{ path: '', loadChildren: './pages/login/login.module#LoginPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}