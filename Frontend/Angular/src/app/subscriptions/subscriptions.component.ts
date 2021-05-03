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
export class SubscriptionsComponent implements	OnInit{
  games: number[]=[]
  constructor(private router: Router,public loginService: LoginService,public userService: UserService, private gameService: GameService){}

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.userService.getSubscriptions(this.loginService.user.id).subscribe(
      gameIds=>{
        this.games=gameIds as number[]
      }
    )


  }

  isEmpty(){
      return this.games.length == 0;
  }
}
