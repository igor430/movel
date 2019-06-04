    
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioI, UsuarioPost } from '../pages/model/usuario.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthSeviceService } from './auth-sevice.service';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})


export class UsuarioService {



  private usuarioCollection: AngularFirestoreCollection<UsuarioI>;
  private usuario: Observable<UsuarioI[]>;

  private usuarioSobre: AngularFirestoreCollection<UsuarioI['sobre']>;
  private usuarioS: Observable<UsuarioI[]>;

  private usuarioCollectionPost: AngularFirestoreCollection<UsuarioPost>;
  private usuarioP: Observable<UsuarioPost[]>;


  private usuarioCollectionPostId: AngularFirestoreCollection<UsuarioPost>;
  private userId: Observable<UsuarioPost[]>;


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

    this.usuarioCollectionPost = db.collection<UsuarioPost>('usuarioPost');
    this.usuarioP = this.usuarioCollectionPost.snapshotChanges().pipe(map(
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

  //post
  addPost(usuarioP:UsuarioPost){
    return this.usuarioCollectionPost.add(usuarioP);
  }

  getUsuarioP(id:string){
    return this.usuarioCollectionPost.doc<UsuarioPost>(id).valueChanges();
  }

  updatePost(usuarioP:UsuarioPost, id:string){
    return this.usuarioCollectionPost.doc(id).update(usuarioP);
  }

  getUsuarioPost(){
    return this.usuarioP;
  }

}