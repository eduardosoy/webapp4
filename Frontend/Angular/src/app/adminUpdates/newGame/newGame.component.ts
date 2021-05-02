import { Component,OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/enums/Genre';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'newGame',
  templateUrl: './newGame.component.html'
})
export class NewGameComponent {
  game: Game;
  @ViewChild("file")
  file:any;
  constructor(private router: Router, activatedRoute:ActivatedRoute,private gameService: GameService,private loginService:LoginService){
    this.game={imagePath:'',gameTitle:'',genre:null,id:null,averageScore:null,description:'',Chat:null,mapScores:null};
  }

  createGame(){
    this.gameService.createGame(this.game).subscribe((game:Game) => {
      this.uploadPostImage(game);

    },
    error => console.error('Error al crear el juego'+error)
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