    
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioI } from '../pages/model/usuario.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthSeviceService } from './auth-sevice.service';


@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  private usuarioCollection: AngularFirestoreCollection<UsuarioI>;
  private usuario: Observable<UsuarioI[]>;

  private usuarioSobre: AngularFirestoreCollection<UsuarioI['sobre']>;
  private usuarioS: Observable<UsuarioI[]>;

  constructor(
    private db:AngularFirestore,
     private afAuth: AngularFireAuth,
     private authService:AuthSeviceService,
     ) 
     { 
    this.usuarioCollection = db.collection<UsuarioI>('usuario');
    this.usuario = this.usuarioCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      }
    ))

    this.usuarioSobre = db.collection<UsuarioI['sobre']>('usuario');
    this.usuarioS = this.usuarioCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      }
    ))
  }

  getUsuarios() {
    return this.usuario;
  }

  getSobre(){
    return this.usuarioS;
    //return this.usuarioSobre.doc<UsuarioI>(id).valueChanges();
  }
  getSobreid(id:string){
    return this.usuarioCollection.doc<UsuarioI>(id).valueChanges();
  }

  getUsuario(id:string) {
    return this.usuarioCollection.doc<UsuarioI>(id).valueChanges();
  }

  update(usuario:UsuarioI, id:string) {
    return this.usuarioCollection.doc(id).update(usuario);
  }

  remove(id:string) {
    return this.usuarioCollection.doc(id).delete();
  }

  addUsuario(usuario:UsuarioI) {    
    return this.usuarioCollection.add(usuario);
  }

}