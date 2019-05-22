import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComunidadePage } from './comunidade.page';
import { TabUsuariosPage } from '../tab-usuarios/tab-usuarios.page';
import { TabOngsPage } from '../tab-ongs/tab-ongs.page';

const routes: Routes = [
  {
    path: '',
    component: ComunidadePage,
    children: [
      {
      path: 'tabUsuarios',
       loadChildren: '../tab-usuarios/tab-usuarios.module#TabUsuariosPageModule'
      },
      {
        path: 'tabOngs',
        loadChildren: '../tab-ongs/tab-ongs.module#TabOngsPageModule'
      }
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [ComunidadePage]
})
export class ComunidadePageModule {}
