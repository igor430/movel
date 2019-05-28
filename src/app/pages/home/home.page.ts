import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioPost } from '../model/usuario.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioP: UsuarioPost[];

  constructor(
    private usuarioService:UsuarioService,

  ) { 

  }

  ngOnInit() {
    this.usuarioService.getUsuarioPost().subscribe(res => {
      this.usuarioP = res
    })
    }
  

}
