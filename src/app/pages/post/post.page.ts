import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioPost } from '../model/usuario.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  usuarioP: UsuarioPost = {

    nome: '',
    uid: '',
    status: false,
    mensagem: ''
    
  }

  usuarioPost = null;

  constructor(
    private usuarioService:UsuarioService,
    private route: ActivatedRoute,
    private db:AngularFirestore,
    public toastController: ToastController,

  ) { }

  ngOnInit() {

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
