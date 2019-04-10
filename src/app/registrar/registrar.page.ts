import { Component, OnInit } from '@angular/core';
import { AuthSeviceService } from './../services/auth-sevice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  displayname: string;
  email: string;
  password: string;

  constructor(private authService: AuthSeviceService, private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.displayname, this.email, this.password).then(res => {
      this.router.navigate(['/login']);
    });
  }

}
