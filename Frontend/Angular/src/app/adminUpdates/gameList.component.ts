import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'gameList',
  templateUrl: './gameList.component.html'
})
export class GameListComponent{
  games:Game[];
  filters:boolean[]=[false,false,false,false,false,false,false,false];
  filtersString:string[]=["Horror","Shooter","Action","Platformer","Sports","Puzzles","Narrative","RPG"]
  constructor(private router: Router, private gameService: GameService){}
  numPage=0;
  ngOnInit() {
    this.getGames(0);
  }
  getGames(num:number){
    this.gameService.getGamesPage(num).subscribe(
      games => {
        this.games = games as Game[];
      }
    );
  }
  gotoGamePage(id:number) {this.router.navigate(['games/'+id]);}
  getMoreGames(){
    console.log(this.numPage);
    this.numPage+=1;
    this.gameService.getGamesPage(this.numPage).subscribe(
      games =>{
        let aux =games as Game[]
        aux.forEach(game =>{
          this.games.push(game)
        })
      }
    );
  }
  searchWithFilters(){
    let finalFilters=[];
    let auxArray=[];
    for(var i in this.filters){
      if(this.filters[i]==true){
        finalFilters.push(this.filtersString[i]);
      }
    }
    finalFilters.forEach(value =>{
      this.gameService.getGamesByGenre(value).subscribe(
        data =>{
          let cosa =data as Game[]
          cosa.forEach(game =>{
            auxArray.push(game)
          })
        }
      )
    });
    this.games=auxArray;

  }
}
