import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';



@Component({
	selector: 'subscriptionButton',
	templateUrl: './subscriptionButton.component.html'
})
export class PostButtonComponent {
	game: Game

	@Input()
	gameId: number;

	constructor(private router:Router,private gameService: GameService){
		this.gameService.getGameById(this.gameId).subscribe(
			game => {
			  this.game = game as Game;
			}
		  );
	}

	gotoGamePage(id:number) {this.router.navigate(['games/'+id]);}
}