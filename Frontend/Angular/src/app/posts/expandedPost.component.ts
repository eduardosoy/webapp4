import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Game } from '../models/game.model';
import { AlgorithmsService } from '../services/algorithms.service';

@Component({
  selector: 'post',
  templateUrl: './expandedPost.component.html'
})

export class ExpandedPostComponent{
  post:Post;
  logged:boolean;
  listText=""
  recommendedGames:Game[]=[]
  constructor(private router: Router, activatedRoute:ActivatedRoute,private algoServ:AlgorithmsService,private pService:PostService,private loginService:LoginService) {
    let id = activatedRoute.snapshot.params['id'];
    this.pService.getPostByID(id).subscribe(
      post=>{
        this.post=post as Post;
      },
      error=>{
        this.router.navigate(['errorPage']);
      }
    )
    this.logged=this.loginService.isAdmin();
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
   gotoEditPost(){
    this.router.navigate(['editPost/'+this.post.id])
  }
  gotoNewPost(){
    this.router.navigate(['newPost/'+this.post.id])
  }
  deleteThis(){
    this.pService.deletePostbyID(this.post.id).subscribe(
      data =>{this.router.navigate(['successPage']);}
    )
  }
}
