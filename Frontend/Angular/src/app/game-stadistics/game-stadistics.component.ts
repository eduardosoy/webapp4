import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../interfaces/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-stadistics',
  templateUrl: './game-stadistics.component.html',
  
})
export class GameStadisticsComponent  {
  game:Game;
  id:number;
  constructor(private router: Router, activatedRoute:ActivatedRoute, private gameService: GameService) { 
    
    this.id = 1;

  }
  ngOnInit(): void {
    this.getGame();
  }
  getGame(){
    this.gameService.getGameById(this.id).subscribe(
      game => {
        this.game = game as Game;
      }
    );
  }
  
  returnIndex() {this.router.navigate(['index']);}
}
