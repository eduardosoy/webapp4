import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'app-subs-button',
	templateUrl: './subs-button.component.html'
})
export class SubsButtonComponent {
	game: Game;

	@Input()
	gameId: number;

	constructor(private router: Router, public gameService: GameService, public loginService: LoginService) {
		this.gameService.getGameById(1).subscribe(
			game => {
				this.game = game as Game;
			}
		)
	}

	unSubscribe(id: number) {

		this.gameService.unSubscribeToGame(this.game.id).subscribe(
			subscriptions => {
				this.loginService.user.myGames = subscriptions as number[];
			}
		)

		this.gotoSuccessPage();
	}

	gotoSuccessPage() { this.router.navigate(['successPage']); }
	gotoGamePage(id: number) { this.router.navigate(['games/' + id]); }
}
