import { PostService } from './../services/post.service';
import { PostButtonComponent } from './postButton.component';
import { Post } from '../models/post.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';
import { AlgorithmsService } from '../services/algorithms.service';

@Component({
  selector: 'listPosts',
  templateUrl: './listPosts.component.html'
})

export class ListPostsComponent{
  posts: Post[]=[];
  typeString="";
  fromGameTitle="";
  listText=""
  id:string
  theType:string
  numPage:string;
  recommendedGames:Game[]=[]
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService,private gameService: GameService,private algoServ:AlgorithmsService) {
    let id = activatedRoute.snapshot.queryParams['gameID']
    let theType=activatedRoute.snapshot.queryParams['theType'];
    let numPage=activatedRoute.snapshot.queryParams['numPage'];
    this.id=id
    this.theType=theType;
    this.numPage=numPage
    this.pService.getPostsFromGame(id,theType,numPage).subscribe(
      posts=>{
        this.posts=posts as Post[];

      },
    )
    this.gameService.getGameById(id).subscribe(
      data =>{
        let game=data as Game;
        this.fromGameTitle=game.gameTitle.toString();
      }
    )
    this.typeString=theType;

   }
   ngOnInit(){
    this.getRecommendedGames();
   }
   getRecommendedGames(){
    this.recommendedGames=this.algoServ.arrayGames
    console.log(this.algoServ.arrayGames)
    if(this.recommendedGames.length==0){
      this.listText="";
    }
    else{
      this.listText="Recomendados"
    }
  }
  gotoExpandedPost(theID:number){
    this.router.navigate(['listPosts/'+theID])
  }
  gotoIndex() {this.router.navigate(['index'])}
  getMorePosts(){
    let aux=parseInt(this.numPage)+1;
    this.numPage=aux.toString();
    this.pService.getPostsFromGame(this.id,this.theType,aux.toString()).subscribe(
      posts=>{
        let aux=posts as Post[]
        aux.forEach(post=>{
          this.posts.push(post)
        })

      },
    )
  }
}
