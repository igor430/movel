import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../model/usuario.interface';
import { AuthSeviceService } from 'src/app/services/auth-sevice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  userNome:string;

  usuario: UsuarioI = {
    role: 1,
    apelido: '',
    sobre: '',
    uid: this.authService.getUid(),
    telefone: ''

  }
  usuarioCadastro = null;


  constructor(
    private authService: AuthSeviceService, 
    private router:Router,  
    private usuarioService:UsuarioService,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private db:AngularFirestore

  ) { }

  ngOnInit() {

    this.userNome = this.authService.getNome();

    this.usuarioCadastro = this.route.snapshot.params['id'];
    if (this.usuarioCadastro) {
      this.usuarioService.getUsuario(this.usuarioCadastro).subscribe(res => {
        this.usuario = res;
      })
    }
  }

  
  async cadastro(){
    if(this.usuarioCadastro) {      
      this.usuarioService.update(this.usuarioCadastro, this.usuarioCadastro);      
    }
    else {
      this.usuarioService.addUsuario(this.usuario);
    }

    this.router.navigate(['/pages/login']);

    let toast = await this.toastController.create({
      message: 'Cadastro concluido com sucesso',
      duration: 3000,
    });   
  
      toast.present(); 
       

  }


}
