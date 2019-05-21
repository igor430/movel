import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComunidadePage } from './comunidade.page';
import { TabUsuariosPage } from '../tab-usuarios/tab-usuarios.page';
import { TabOngsPage } from '../tab-ongs/tab-ongs.page';
import { ComunidadeRoutingModule } from './comunidade-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ComunidadePage,
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    //ComunidadeRoutingModule

  ],
  declarations: [ComunidadePage]
})
export class ComunidadePageModule {}
