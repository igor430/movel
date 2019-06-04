import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

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
  
  { 
    path: '', 
    loadChildren: './pages/menu/menu.module#MenuPageModule', 
    canActivate: [ AuthGuard ]
  },
  { path: 'pages/sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule' },

  { path: 'pages/sobre/:id', loadChildren: './pages/sobre/sobre.module#SobrePageModule' },
  
  { path: 'pages/post', loadChildren: './pages/post/post.module#PostPageModule' },
  { path: 'pages/cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' }


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}