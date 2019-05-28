import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userPosts

  constructor(private user: UsuarioService, private afs: AngularFirestore) { 
    const posts = afs.doc('users/${user.getUID()}')
    this.userPosts = posts.valueChanges()
  }

  ngOnInit() {
  }

}
