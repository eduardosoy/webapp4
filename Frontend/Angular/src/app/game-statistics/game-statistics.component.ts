import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { ScoresService } from '../services/scores.service';
@Component({
  selector: 'app-game-statistics',
  templateUrl: './game-statistics.component.html',
  
})
export class GameStatisticsComponent  {
  game:Game;
  id:number;
  myScores: Map<number,number>;
  stars1:number;
  stars2:number;
  stars3:number;
  stars4:number;
  stars5:number;

  constructor(private router: Router, activatedRoute:ActivatedRoute, private gameService: GameService,private scoresService:ScoresService) { 
    
    let id = activatedRoute.snapshot.params['id'];
    this.id = id;

  }
  ngOnInit(): void {
    this.getGame();
    this.getMap();
    this.showStars();
  }
  getMap(){
    this.scoresService.getScoresById(this.id).subscribe(
      myScores => {
        this.myScores = myScores as Map<number,number>;
      }
    );
  }
  showStars():void{
    
    this.stars1=this.scoresService.doAverageRatio(this.myScores,1);
    this.stars2=this.scoresService.doAverageRatio(this.myScores,2);
    this.stars3=this.scoresService.doAverageRatio(this.myScores,3);
    this.stars4=this.scoresService.doAverageRatio(this.myScores,4);
    this.stars5=this.scoresService.doAverageRatio(this.myScores,5);
  }
//this.scoresService.doAverageRatio(this.myScores,1)
  getGame(){
    this.gameService.getGameById(this.id).subscribe(
      game => {
        this.game = game as Game;
      }
    );
  }
  
  returnIndex() {this.router.navigate(['index']);}
}
