import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user:User;
  
  constructor(private router: Router,public loginService: LoginService,public userService: UserService){ }

  createUser(){
    this.userService.createNewUser(this.user).subscribe(data => {
      console.log(data)
      this.router.navigate(['index']);
      //enrutar a success page
    },
    error => console.error('Error al crear el post '+error)
    );
  }

}
