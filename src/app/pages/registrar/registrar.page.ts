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
  
  usuario: UsuarioI = {

    role: true, //true = usuario normal
    nome: '',//this.authService.getNome(),
    uid: '',//this.authService.getUid(),
    email: '',//this.authService.getEmail(),
    sobre: ''
    
  }
  
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

    this.usuarioId = this.route.snapshot.params['id'];
    if (this.usuarioId) {
      this.usuarioService.getUsuario(this.usuarioId).subscribe(res => {
        this.usuario = res;
      })
    }
    
  }

  async register(){
    
    this.authService.register(this.displayname, this.email, this.password).then(res => {
      this.router.navigate(['/pages/login']);
    }).catch(err => alert('Email ja cadastrado'))

    //try{}
    
    if(this.usuarioId) {      
      this.usuarioService.update(this.usuario, this.usuarioId);      
    }
    else {
      this.usuarioService.addUsuario(this.usuario);
    }
    
      let toast = await this.toastController.create({
      message: 'Usuário cadastrado',
      duration: 3000,
    });   
  
      toast.present(); 
       
  }
  
}

  /*
    async emailCadatrado(){
      let toast = await this.toastController.create({
        message: 'Este email ja foi cadastrado',
        duration: 3000,
      });
          return toast.present(); 
    }
  */


