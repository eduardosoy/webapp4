import { GameService } from 'src/app/services/game.service';
import { UserService } from './user.service';
import { LoginService } from 'src/app/services/login.service';
import { Game } from './../models/game.model';
import { Genres } from './../enums/Genres';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { User } from '../models/user.model';

@Injectable({providedIn:'root'})
export class AlgorithmsService{
  constructor(private httpClient: HttpClient,private loginService:LoginService,private userService:UserService,private gameService: GameService) { }

  recommendedAlgorithm(user:User){
    let amountOfGamesWithGenre= new Map();
    Object.values(Genres).forEach(genre =>
        amountOfGamesWithGenre.set(genre,0)
    );
    let myGames;
    this.userService.getSubscriptions(this.loginService.user.id).subscribe(
      games=>{
        myGames = games as number[];
      }
    )
    console.log(myGames)
    myGames.forEach(game =>{
      //getgamebyid por parametro game y get genre,get entrada en el mapa del genre y sumarle 1
      this.gameService.getGameById(game).subscribe(
        data =>{
          let game=data as Game;
          amountOfGamesWithGenre.set(game.genre,amountOfGamesWithGenre.get(game.genre)+1);
          console.log(amountOfGamesWithGenre.get(game.genre))
        }
      )
    })
    //encontrar entrada mayor y devolver el genre.
  }
  doAverageScore(scores:Map<number,number>){
    let aux=0.0;
    scores.forEach(score =>
      aux+=score
      );
      aux = aux/(scores.size);
      aux = aux*10;
      aux = Math.round(aux);
      aux = aux/10;
      return aux;
  }

}
