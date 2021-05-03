import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user:User;
  
  constructor(private router: Router,public loginService: LoginService, activatedRoute:ActivatedRoute,public userService: UserService){ 
    let id=activatedRoute.snapshot.params['id'];
    this.user={info:'',password:'',roles:['USER'],myGames:[],imagePath:null};
  }

  createUser(){
    this.userService.createNewUser(this.user).subscribe(data => {
      this.router.navigate(['successPage']);
    },
    error => console.error('Error al crear el post '+error)
    );
  }

}
