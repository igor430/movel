import { Component, OnInit } from '@angular/core';

import { UsuarioI } from '../model/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-tab-usuarios',
  templateUrl: './tab-usuarios.page.html',
  styleUrls: ['./tab-usuarios.page.scss'],
})
export class TabUsuariosPage implements OnInit {
  
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
    console.log("tab de users");
  }

}
