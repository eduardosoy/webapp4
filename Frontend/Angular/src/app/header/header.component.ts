import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  imgUrl = "assets/logo.png"

  constructor(private router: Router,public loginService: LoginService,public userService: UserService){ }

  gotoIndex() {this.router.navigate(['index']);}
  gotoLogin() {this.router.navigate(['login']);}
  gotoRegister() {this.router.navigate(['register']);}
  gotoProfile() {this.router.navigate(['profile/'+this.loginService.user.id]);}
  gotoAdminUpdates() {this.router.navigate(['adminUpdates']);}
  gotoGameList() {this.router.navigate(['gameList']);}
}
