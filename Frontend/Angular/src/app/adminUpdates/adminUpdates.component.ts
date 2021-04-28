import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';


@Component({
  selector: 'adminUpdates',
  templateUrl: './adminUpdates.component.html'
})
export class AdminUpdatesComponent {
  games: Game[];
  constructor(private router: Router, activatedRoute:ActivatedRoute, private gameService: GameService){}
  iconUrl = "assets/plusicon.png"

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
  gotoEditGame(id:number) {this.router.navigate(['editGame/'+id]);}
  gotoCreatePost(id:number) {this.router.navigate(['newPost/'+id]);}
  gotoNewGame() {this.router.navigate(['newGame']);}
}
