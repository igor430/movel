import { Component, OnInit } from '@angular/core';
import { AuthSeviceService } from './../../services/auth-sevice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioI } from '../model/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  displayname: string;
  email: string;
  password: string;

  usuarioId = null;

  constructor(
    private authService: AuthSeviceService, 
    private router:Router,  
    private usuarioService:UsuarioService,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private db:AngularFirestore

    ) { }

  ngOnInit() {

  
  }

  register(){
    
    this.authService.register(this.displayname, this.email, this.password).then(res => {
      this.router.navigate(['/pages/cadastro']);
    }).catch(err => alert('Email ja cadastrado'));  
  }
  
}
