import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioPost, UsuarioI } from '../model/usuario.interface';
import { AuthSeviceService } from 'src/app/services/auth-sevice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioP: UsuarioPost[];

  usuarios: UsuarioI[];

  perfil: UsuarioI[];

  status = false;

  constructor(
    private usuarioService:UsuarioService,
    private authService: AuthSeviceService,
    private usuarioServicePerfil: PerfilService,
    public db: AngularFirestore


  ) { 

  }


  ngOnInit() {
   
      this.usuarioService.getUsuarioPost().subscribe(res => {
      this.usuarioP = res
    })

    this.usuarioService.getUsuarios().subscribe(res => {
      this.usuarios = res
    })

    this.usuarioServicePerfil.getPerfil().subscribe(res => {
      this.perfil = res
    })
    
    }
    ionViewWillEnter(){
      this.ngOnInit();
    }
  

}
