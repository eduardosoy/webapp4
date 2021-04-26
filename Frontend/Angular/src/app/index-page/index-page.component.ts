import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  
})
export class IndexPageComponent  {

  game:Game;
  games:Game[];

  constructor(private router: Router, activatedRoute:ActivatedRoute, private gameService: GameService) {
    let id = activatedRoute.snapshot.params['id'];

  
  }
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
  gotoGamePage() {this.router.navigate(['games']);}
}
