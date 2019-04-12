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
      title: 'Entrar',
      url: '/menu/entrar'
    },
    {
      title: 'Feed',
      url: '/menu/paginafeed'
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
