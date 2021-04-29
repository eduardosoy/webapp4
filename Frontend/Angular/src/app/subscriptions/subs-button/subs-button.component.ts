import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-subs-button',
  templateUrl: './subs-button.component.html'
})
export class SubsButtonComponent{

	@Input()
	game: Game;

	constructor(private router:Router,public gameService: GameService){}

	gotoGamePage(id:number) {this.router.navigate(['games/'+id]);}
}
