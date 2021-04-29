import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-subs-button',
  templateUrl: './subs-button.component.html'
})
export class SubsButtonComponent implements OnInit {

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

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

	gotoGamePage(id:number) {this.router.navigate(['games/'+id]);}
}
