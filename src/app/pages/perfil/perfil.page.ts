import { Component, OnInit } from '@angular/core';
import { AuthSeviceService } from 'src/app/services/auth-sevice.service';

import { UsuarioI } from '../model/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router, ResolveStart } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userEmail:string;
  userNome:string;
  userTelefone: string;
  userUid: string;

  usuarios: UsuarioI[];  

  private loading;

  constructor(
    private authService:AuthSeviceService,
    private route: ActivatedRoute,
    private usuarioService:UsuarioService,
    private db:AngularFirestore, 
    public afstore: AngularFirestore, 
    private router: Router,
    public loadingController: LoadingController,
    public navCtrl: NavController,

  ){ }

  ngOnInit() {

    this.userEmail = this.authService.getEmail();
    this.userNome = this.authService.getNome();
    this.userUid = this.authService.getUid();

    this.usuarioService.getUsuarios().subscribe(res => {
      this.usuarios = res
    })
  }

add() {

  this.loadingController.create({
    message: 'Atualizando'
  }).then((overlay) => {
    this.loading = overlay;
    this.loading.present();
  });
  
  setTimeout(() => {
    this.loading.dismiss();
    this.navCtrl.navigateRoot('/menu/perfil');
  },4000);

  //this.router.navigate(['/menu/perfil']);
}

}

