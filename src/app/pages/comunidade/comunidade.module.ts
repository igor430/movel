import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComunidadePage } from './comunidade.page';


const routes: Routes = [
  {
    path: '',
    component: ComunidadePage,
    children: [
      {
       path: 'usuarios',
       loadChildren: '../tab-usuarios/tab-usuarios.module#TabUsuariosPageModule'
      },
      {
        path: 'ongs',
        loadChildren: '../tab-ongs/tab-ongs.module#TabOngsPageModule'
      },
      
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
