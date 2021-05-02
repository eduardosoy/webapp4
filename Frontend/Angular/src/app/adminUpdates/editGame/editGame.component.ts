import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';


@Component({
  selector: 'editGame',
  templateUrl: './editGame.component.html'
})
export class EditGameComponent {
  game: Game;
  id: number;
  @ViewChild("file")
  file: any;
  constructor(private router: Router, activatedRoute: ActivatedRoute, private gameService: GameService) {
    let id = activatedRoute.snapshot.params['id'];
    this.gameService.getGameById(id).subscribe(
      game=>{
        this.game=game as Game;
      }
    )
  }
  editGame(){
    this.gameService.createGame(this.game).subscribe((game:Game) => {
      this.uploadPostImage(game);

    },
    error => console.error('Error al crear el post '+error)
    );
  }
  uploadPostImage(game:Game){
    const image=this.file.nativeElement.files[0];
    if(image){
      let formData=new FormData();
      formData.append("imageFile",image);
      this.gameService.setGameImage(game,formData).subscribe(
        _ => this.router.navigate(['successPage'])
      )
    }
  }
}