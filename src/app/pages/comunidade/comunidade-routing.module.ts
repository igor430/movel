import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComunidadePage } from './comunidade.page';
import { TabUsuariosPage } from '../tab-usuarios/tab-usuarios.page';
import { TabOngsPage } from '../tab-ongs/tab-ongs.page';


const routes: Routes = [
  {
    path: '/menu/comunidade',
    component: ComunidadePage,
    children: [
      {
        path: 'tabUsuarios',
        outlet: 'tabUsuarios',
        component: TabUsuariosPage
      },
      {
        path: 'tabOngs',
        outlet: 'tabOngs',
        component: TabOngsPage
      }
    ]
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComunidadeRoutingModule { }
