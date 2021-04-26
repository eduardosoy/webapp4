import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  imgUrl = "assets/logo.png"

  constructor(private router: Router){ }

  gotoIndex() {this.router.navigate(['index']);}
  gotoLogin() {this.router.navigate(['login']);}
  gotoRegister() {this.router.navigate(['register']);}
  gotoProfile() {this.router.navigate(['profile']);}
}
