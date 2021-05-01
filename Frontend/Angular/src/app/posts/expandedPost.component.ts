import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './expandedPost.component.html'
})

export class ExpandedPostComponent{
  post:Post;
  logged:boolean;

  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService,private loginService:LoginService) {
    let id = activatedRoute.snapshot.params['id'];
    this.pService.getPostByID(id).subscribe(
      post=>{
        this.post=post as Post;
      }
    )
    this.logged=this.loginService.isAdmin();
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
