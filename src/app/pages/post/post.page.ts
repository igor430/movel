import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioPost } from '../model/usuario.interface';
import { ToastController } from '@ionic/angular';
import { AuthSeviceService } from 'src/app/services/auth-sevice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  userNome:string;

  usuarioP: UsuarioPost = {

    nome: this.authService.getNome(),
    status: false,
    autor: this.authService.getUid(),
    mensagem: ''
    
  }

  usuarioPost = null;

  constructor(
    private usuarioService:UsuarioService,
    private route: ActivatedRoute,
    private db:AngularFirestore,
    public toastController: ToastController,
    private authService: AuthSeviceService, 


  ) { }

  ngOnInit() {

    this.userNome = this.authService.getNome();

    this.usuarioPost = this.route.snapshot.params['id'];
    if (this.usuarioPost) {
      this.usuarioService.getUsuarioP(this.usuarioPost).subscribe(res => {
        this.usuarioP = res;
      })
    }
  }

  async publicar(){
    if(this.usuarioPost) {      
      this.usuarioService.update(this.usuarioPost, this.usuarioPost);      
    }
    else {
      this.usuarioService.addPost(this.usuarioP);
    }

    let toast = await this.toastController.create({
      message: 'Publicagem efetuada com sucesso',
      duration: 3000,
    });   
  
      toast.present(); 
       

  }

}
