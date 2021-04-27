import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'newPost',
  templateUrl: './createPost.component.html',
})

export class CreatePostComponent{
  post:Post;
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService){
    this.post={title:'',author:'',creationDate:'',updateDate:'',fromGameID:1,imagePath:'',postText:'',postType:null};
  }
  createPost(){
    this.pService.createNewPost(this.post).subscribe(data => {
      console.log(data)
      //enrutar a success page
    },
    error => console.error('Error al crear el post '+error)
    );
  }
}
