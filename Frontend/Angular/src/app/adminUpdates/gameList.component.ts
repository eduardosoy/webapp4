import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'gameList',
  templateUrl: './gameList.component.html'
})
export class GameListComponent{
  games:Game[];
  constructor(private router: Router, private gameService: GameService){}

  ngOnInit() {
    this.getGames();
  }
  getGames(){
    this.gameService.getGames().subscribe(
      games => {
        this.games = games as Game[];
      }
    );
  }
  gotoGamePage(id:number) {this.router.navigate(['games/'+id]);}
}
