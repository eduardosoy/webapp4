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
import { Genre } from '../enums/Genre';

@Injectable({providedIn:'root'})
export class AlgorithmsService{
  arrayGames:Game[]=[]
  initialized:boolean=false;
  amountOfGamesWithGenre:Map<string,number>=new Map<string,number>();
  constructor(private httpClient: HttpClient,private gameService: GameService,private loginService:LoginService,private userService:UserService) {

   }
  initializeMap(){
    this.amountOfGamesWithGenre.set("Horror",0);
    this.amountOfGamesWithGenre.set("Action",0);
    this.amountOfGamesWithGenre.set("Shooter",0);
    this.amountOfGamesWithGenre.set("RPG",0);
    this.amountOfGamesWithGenre.set("Platformer",0);
    this.amountOfGamesWithGenre.set("Sports",0);
    this.amountOfGamesWithGenre.set("Narrative",0);
    this.amountOfGamesWithGenre.set("Puzzles",0);
    this.arrayGames=[]
    this.initialized=true
  }
  updateMap(key:string){
    this.amountOfGamesWithGenre.set(key,this.amountOfGamesWithGenre.get(key)+1);
  }
  updateMapUnsub(key:string){
    this.amountOfGamesWithGenre.set(key,this.amountOfGamesWithGenre.get(key)-1);
  }
  displayMap(){
    this.amountOfGamesWithGenre.forEach((value:number,key:string)=>{
      console.log("la llave "+key+" tiene asociado el valor "+value);
    })
  }
  recommendedAlgorithm(){
    if(!this.loginService.isLogged){
      this.arrayGames=[];
    }
    else{
      let auxCont=0;
      let selectedGenre:string;
      this.amountOfGamesWithGenre.forEach((value:number,key:string)=>{
          if(this.amountOfGamesWithGenre.get(key)>auxCont){
            auxCont=this.amountOfGamesWithGenre.get(key);
            selectedGenre=key;
          }
      })
      this.gameService.getGamesByGenre(selectedGenre).subscribe(games=>{
        this.arrayGames=games as Game[];
      })

  }
}

}
