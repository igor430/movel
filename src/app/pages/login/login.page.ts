import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

import { UsuarioI } from '../model/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  usuarios: UsuarioI[];

  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {

  }
  
  onSubmitLogin(){

    this.authservice.login(this.email, this.password).then(res => {
      this.router.navigate(['/menu/perfil']);
    }).catch(err => alert('Dados incorretos'));
  }

}
