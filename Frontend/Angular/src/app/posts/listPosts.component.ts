import { PostService } from './../services/post.service';
import { PostButtonComponent } from './postButton.component';
import { Post } from '../models/post.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'listPosts',
  templateUrl: './listPosts.component.html'
})

export class ListPostsComponent{
  posts: Post[]=[];
  typeString="";
  fromGameTitle="";
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService,private gameService: GameService) {
    let id = activatedRoute.snapshot.queryParams['gameID']
    let theType=activatedRoute.snapshot.queryParams['theType'];
    let numPage=activatedRoute.snapshot.queryParams['numPage'];
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
  gotoExpandedPost(theID:number){
    this.router.navigate(['listPosts/'+theID])
  }
  gotoIndex() {this.router.navigate(['index'])}
}
