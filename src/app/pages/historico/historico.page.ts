import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioPost, UsuarioI } from '../model/usuario.interface';
import { AuthSeviceService } from 'src/app/services/auth-sevice.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  usuarioP: UsuarioPost[];

  usuarioId: UsuarioPost[];

  usuarios: UsuarioI[];

  user = this.authService.getUid();

  pendente = false;
  concluido = true;


  constructor(
    private db:AngularFirestore,
    private usuarioService:UsuarioService,
    private authService: AuthSeviceService,

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
}
