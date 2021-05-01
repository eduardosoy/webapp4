import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'editPost',
  templateUrl: './editPost.component.html'
})

export class EditPostComponent{
  post:Post;
  @ViewChild("file")
  file:any;
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService) {
    let id = activatedRoute.snapshot.params['id'];
    this.pService.getPostByID(id).subscribe(
      post=>{
        this.post=post as Post;
      }
    )
   }
   editPost(){
    this.pService.createNewPost(this.post).subscribe((post:Post) => {
      this.uploadPostImage(post);

    },
    error => console.error('Error al crear el post '+error)
    );
  }
  uploadPostImage(post:Post){
    const image=this.file.nativeElement.files[0];
    if(image){
      let formData=new FormData();
      formData.append("imageFile",image);
      this.pService.setPostImage(post,formData).subscribe(
        _ => this.router.navigate(['successPage'])
      )
    }
  }
}
