import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthSeviceService } from 'src/app/services/auth-sevice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  userNome:string;

  pages = [

    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },

    {
      title: 'Perfil',
      url: '/menu/perfil',
      icon: 'person'
    },
    {
      title: 'Comunidade',
      url: '/menu/comunidade',
      icon: 'md-globe'
    },
    {
      title: 'Histórico',
      url: '/menu/historico',
      icon: 'paper'
    },


  ];

  selectPath = '';

  constructor(private router: Router, private AFauth: AngularFireAuth, private authService:AuthSeviceService,) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectPath = event.url;
    });
  }

  ngOnInit() {
    this.userNome = this.authService.getNome();

  }

  logout(){
    this.AFauth.auth.signOut();
    this.router.navigate(['/pages/login']);
  }

}
