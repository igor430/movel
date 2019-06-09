    
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioI, UsuarioPost } from '../pages/model/usuario.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthSeviceService } from './auth-sevice.service';


@Injectable({
  providedIn: 'root'
})


export class PerfilService {

  user = this.authService.getUid();


  private usuarioCollectionTelefone: AngularFirestoreCollection<UsuarioI>;
  private perfil: Observable<UsuarioI[]>;

  constructor(
    private db:AngularFirestore,
     private afAuth: AngularFireAuth,
     private authService:AuthSeviceService,
     ) 
     { 
        this.usuarioCollectionTelefone = db.collection('usuario', ref => ref.where('uid', '==', this.user));
        this.perfil = this.usuarioCollectionTelefone.snapshotChanges().pipe(map(
          actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return {id, ...data};
            })
          }
        ))

  }

     
  getPerfil(){
    return this.perfil;
  }

}