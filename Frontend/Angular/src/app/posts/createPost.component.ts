import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostType } from '../enums/PostType';

@Component({
  selector: 'newPost',
  templateUrl: './createPost.component.html',
})

export class CreatePostComponent{
  post:Post;
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService){
    let id=activatedRoute.snapshot.params['id'];
    this.post={title:'',author:'',creationDate:'',updateDate:'',fromGameID:id,imagePath:'',postText:'',postType:null};
  }
  createPost(){
    this.pService.createNewPost(this.post).subscribe(data => {
      this.router.navigate(['successPage']);
    },
    error => console.error('Error al crear el post '+error)
    );
  }
}
