import { Component, OnInit } from '@angular/core';
import { AuthSeviceService } from 'src/app/services/auth-sevice.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userEmail:string;
  userNome:string;

  constructor(
    private authService:AuthSeviceService,
  ) { 

  }

  ngOnInit() {

    this.userEmail = this.authService.getEmail();
    this.userNome = this.authService.getNome();

  }

}
