import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children:[
      {
        path: 'primeira',
        loadChildren: '../primeira/primeira.module#PrimeiraPageModule'
      },
      {
        path: 'segunda',
        loadChildren: '../segunda/segunda.module#SegundaPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/primeira'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
