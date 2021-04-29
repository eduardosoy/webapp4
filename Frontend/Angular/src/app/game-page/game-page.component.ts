import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',

})
export class GamePageComponent {

game:Game;
id:number;
myGames:number[];

logged:boolean;

  constructor(private router: Router, activatedRoute:ActivatedRoute, private gameService: GameService, public loginService: LoginService, private userService: UserService) {
    let id = activatedRoute.snapshot.params['id'];
    this.id = id;
  }
  ngOnInit(): void {
    this.getGame();
    this.getSubscriptions();
    this.logged=this.loginService.isLogged();//no funciona de momento
  }
    getGame(){
      this.gameService.getGameById(this.id).subscribe(
        game => {
          this.game = game as Game;
        }
      );
    }
   
    valorar(valoracion:number){
      
      this.gameService.setScoreById(this.id,valoracion).subscribe(
        score=>{
          this.gotoSuccessPage();
        },
        error => console.error(error)
      )
      
    }

    isSubscribe(id: number){
      return this.myGames.includes(id);
    }

    subscribe(id: number){

      this.gameService.subscribeToGame(this.game.id).subscribe(
        subscriptions=>{
          this.loginService.user.myGames = subscriptions as number[];
        }
      )

      this.gotoSuccessPage();
    }

    getSubscriptions(){
      this.userService.getSubscriptions(this.loginService.user.id).subscribe(
        games=>{
          this.myGames = games as number[];
        }
      )
    }

    unSubscribe(id: number){

      this.gameService.unSubscribeToGame(this.game.id).subscribe(
        subscriptions=>{
          this.loginService.user.myGames = subscriptions as number[];
        }
      )

      this.gotoSuccessPage();
    }
    

   returnIndex() {this.router.navigate(['index']);}
   gotoSuccessPage() {this.router.navigate(['successPage']);}
   gotoGameStats(id:number) {this.router.navigate(['statistics/'+id]);}
   gotoListPosts(id:number,postType,numPage:string){this.router.navigate(['listPosts/types'],{queryParams:{gameID:id,theType:postType,numPage:numPage}})}
}


