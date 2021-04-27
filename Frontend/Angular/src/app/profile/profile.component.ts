import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user:User;
  id:number;
    constructor(private router: Router, activatedRoute:ActivatedRoute, private userService: UserService) {
      let id = activatedRoute.snapshot.params['id'];
      this.id = id;
    }
    ngOnInit(): void {
      this.getGame();
    }
      getGame(){
        this.userService.getUserById(this.id).subscribe(
          user => {
            this.user = user as User;
          }
        );
      }

      gotoSubscriptions(){
        {this.router.navigate(['subscriptions']);}
      }

}
