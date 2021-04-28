import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'editPost',
  templateUrl: './editPost.component.html'
})

export class EditPostComponent{
  post:Post;
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService) {
    let id = activatedRoute.snapshot.params['id'];
    this.pService.getPostByID(id).subscribe(
      post=>{
        this.post=post as Post;
      }
    )
   }
   editPost(){
    this.pService.createNewPost(this.post).subscribe(data => {
      this.router.navigate(['successPage']);
    },
    error => console.error('Error al crear el post '+error)
    );
  }
}
