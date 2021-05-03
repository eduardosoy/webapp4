import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game.model';
import { AlgorithmsService } from '../services/algorithms.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',

})
export class IndexPageComponent  {

  game:Game;
  games:Game[];
  recommendedGames:Game[];
  listText="";
  iconUrl = "assets/plusicon.png"

  constructor(private router: Router, activatedRoute:ActivatedRoute, private gameService: GameService,private algorithmServ:AlgorithmsService) {
    let id = activatedRoute.snapshot.params['id'];


  }
  ngOnInit() {
    this.getGames();
    this.getRecommendedGames();
    if(!this.algorithmServ.initialized){
      this.listText=""
      this.algorithmServ.initializeMap();
    }

  }
  getGames(){
    this.gameService.getGames().subscribe(
      games => {
        this.games = games as Game[];
        const items = this.games.slice(0, 8);
        this.games=items;
      }
    );
  }
  getRecommendedGames(){
    this.recommendedGames=this.algorithmServ.arrayGames
    if(this.recommendedGames.length==0){
      this.listText="";
    }
    else{
      this.listText="Recomendados"
    }
  }
  gotoGamePage(id:number) {this.router.navigate(['games/'+id]);}
  gotoAdminUpdates() {this.router.navigate(['adminUpdates']);}
}
