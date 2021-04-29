import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent  {
  myGames: number[];
  games: Game[];
  vacio: boolean;

  ngOnInit(): void {
    this.getSubscriptions();
    this.vacio = this.isEmpty(); 
  }

  constructor(private router: Router,public loginService: LoginService,public userService: UserService, private gameService: GameService){ }  
  private getSubscriptions(){
    this.userService.getSubscriptions(this.loginService.user.id).subscribe(
      myGames=>{
        this.myGames = myGames as number[];
      },
    ) 
  }

  isEmpty(){
      return this.myGames.length == 0;
  }
}
