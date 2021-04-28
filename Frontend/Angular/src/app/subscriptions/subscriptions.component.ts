import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent {
  myGames: number[];

  ngOnInit(): void {
    this.getSubscriptions();
  }

  constructor(private router: Router,public loginService: LoginService,public userService: UserService){ }  
  private getSubscriptions(){
    this.userService.getSubscriptions(this.loginService.user.id).subscribe(
      myGames=>{
        this.myGames = myGames as number[];

      },
    )  
  }
}
