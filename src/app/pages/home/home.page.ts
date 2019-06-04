import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioPost, UsuarioI } from '../model/usuario.interface';
import { AuthSeviceService } from 'src/app/services/auth-sevice.service';
import { TabUsuariosPage } from '../tab-usuarios/tab-usuarios.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioP: UsuarioPost[];

  usuarios: UsuarioI[];

  status = false;

  role = false;

  constructor(
    private usuarioService:UsuarioService,
    private authService: AuthSeviceService


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
