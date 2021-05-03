import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User;
  file: any;

  constructor(public loginService: LoginService,private router: Router, private userService: UserService) { }

  logIn(event: any, user: string, pass: string) {

    event.preventDefault();

    this.loginService.logIn(user, pass);

    this.user = this.loginService.user;

    this.router.navigate(['index']);
  }

  uploadUserImage(){
    const image=this.file.nativeElement.files[0];
    if(image){
      let formData=new FormData();
      formData.append("imageFile",image);
      this.userService.setUserImage(this.user,formData);
    }
    this.router.navigate(['successPage']);
  }

}
