import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';


@Component({
  selector: 'editGame',
  templateUrl: './editGame.component.html'
})
export class EditGameComponent {
    game:Game;
    id:number;
      constructor(private router: Router, activatedRoute:ActivatedRoute, private gameService: GameService) {
        let id = activatedRoute.snapshot.params['id'];
        this.id = id;
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
}