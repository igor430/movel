import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Perfil',
      url: '/menu/primeira'
    },
    {
      title: 'Segunda Página',
      url: '/menu/segunda'
    }
  ];

  selectPath = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectPath = event.url;
    });
  }

  ngOnInit() {
  }

}
