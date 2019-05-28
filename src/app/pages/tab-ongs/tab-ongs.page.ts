import { Component, OnInit } from '@angular/core';

import { UsuarioI } from '../model/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-tab-ongs',
  templateUrl: './tab-ongs.page.html',
  styleUrls: ['./tab-ongs.page.scss'],
})
export class TabOngsPage implements OnInit {

  usuarios: UsuarioI[];  

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(res => {
      this.usuarios = res
    })
  }

  constructor(
    private usuarioService:UsuarioService,
  ) { }

  ionViewWillEnter(){
    console.log("Tab de ongs");
  }


  

}
