import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../model/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {


  sobreid: null;

   usuarioS: UsuarioI = {
        role: 1,
        uid: '',
        nome: '',
        sobre: ''
  }
  

  /*usuarioS: UsuarioI['sobre'] */

  ngOnInit() {

    this.sobreid = this.route.snapshot.params['id'];
    if(this.sobreid){
    this.usuarioService.getSobreid(this.sobreid).subscribe(res => {
      this.usuarioS = res
    })
    }
    
  }

  constructor(
    private usuarioService:UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

}
