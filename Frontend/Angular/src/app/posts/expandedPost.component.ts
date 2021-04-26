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
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService) {
    let id = activatedRoute.snapshot.params['id'];
    this.pService.getPostByID(id).subscribe(
      post=>{
        this.post=post as Post;
      }
    )
   }
   gotoEditPost(){
    this.router.navigate(['editPost/'+this.post.id])
  }
}
