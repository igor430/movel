import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioPost, UsuarioI } from '../model/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioP: UsuarioPost[];

  usuarios: UsuarioI[];

  constructor(
    private usuarioService:UsuarioService,

  ) { 

  }

  ngOnInit() {
    this.usuarioService.getUsuarioPost().subscribe(res => {
      this.usuarioP = res
    })

    this.usuarioService.getUsuarios().subscribe(res => {
      this.usuarios = res
    })
    }
    ionViewWillEnter(){
      console.log("pagina home");
    }
  

}
