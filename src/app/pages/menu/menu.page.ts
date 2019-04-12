import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

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
      title: 'Histórico',
      url: '/menu/segunda',
      icon: 'paper'
    }

  ];

  selectPath = '';

  constructor(private router: Router, private AFauth: AngularFireAuth) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectPath = event.url;
    });
  }

  ngOnInit() {
  }

  logout(){
    this.AFauth.auth.signOut();
    this.router.navigate(['/pages/login']);
  }

}
