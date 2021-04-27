import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user:User;
  id:number;

    constructor(private router: Router, activatedRoute:ActivatedRoute, private userService: UserService,public loginService: LoginService) {
      let id = activatedRoute.snapshot.params['id'];
      this.id = id;
    }
    ngOnInit(): void {
      this.getUser();
    }
      getUser(){
        this.userService.getUserById(this.id).subscribe(
          user => {
            this.user = user as User;
          }
        );
      }

      gotoSubscriptions(){
        {this.router.navigate(['subscriptions']);}
      }

      logOut() {
        this.loginService.logOut();
      }

}
