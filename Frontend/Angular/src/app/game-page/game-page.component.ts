import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',

})
export class GamePageComponent {

game:Game;
//id:number;
  constructor(private router: Router,/* activatedRoute:ActivatedRoute, */private gameService: GameService) {
    /*let id = activatedRoute.snapshot.params['id'];
    this.id = id;*/
  }
  ngOnInit(): void {
    this.getGame();
  }
    getGame(){
      this.gameService.getGameById(1).subscribe(
        game => {
          this.game = game as Game;
        }
      );
    }

   returnIndex() {this.router.navigate(['index']);}
   gotoGameStats(id:number) {this.router.navigate(['statistics/'+this.game.id]);}
   gotoListPosts(id:number,postType,numPage:string){this.router.navigate(['listPosts/types'])}
}
