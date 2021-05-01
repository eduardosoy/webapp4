import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from '../models/chat.model';
import { Game } from '../models/game.model';
import { Message } from '../models/message.model';
import { AlgorithmsService } from '../services/algorithms.service';
import { ChatService } from '../services/chat.service';
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
idChat:number;
myGames:number[];
logged:boolean;
messageSentToChat="";


  constructor(private router: Router, activatedRoute:ActivatedRoute,private algorithms:AlgorithmsService, private gameService: GameService, public loginService: LoginService, private userService: UserService, private chatService: ChatService) {
    let id = activatedRoute.snapshot.params['id'];
    this.id = id;
  }
  ngOnInit(): void {
    this.getGame();
    this.getSubscriptions();
    this.logged=this.loginService.isLogged();
  }
    getGame(){
      this.gameService.getGameById(this.id).subscribe(
        game => {
          this.game = game as Game;
          this.getChat();
        }
      );
    }
    getChat(){
      this.idChat=this.id;
      this.idChat++;
      this.chatService.getChatById(this.idChat).subscribe(
        chat => {
          this.game.Chat = chat as Chat;
          this.setWritters(chat);
        }
      );
    }

    setWritters(chat: Chat){

      for (let i = 0; i < (chat.listMessages as Array<Message>).length; i++) {
        (chat.listMessages as Array<Message>)[i].isMessageWriter=(chat.listMessages as Array<Message>)[i].nameUser==(this.loginService.currentUser().info);
      }
    }

    sendMessage(){


      this.chatService.setNewMessage(this.id,this.messageSentToChat).subscribe(
        game=>{
          this.getChat();
          this.messageSentToChat="";
        },
        error => console.error(error)
      )


    }


    value(valoration:number){

      this.gameService.setScoreById(this.id,valoration).subscribe(
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
          this.algorithms.recommendedAlgorithm(this.loginService.user);
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


