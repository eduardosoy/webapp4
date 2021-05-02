import { LoginService } from './../services/login.service';
import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostType } from '../enums/PostType';


@Component({
  selector: 'newPost',
  templateUrl: './createPost.component.html',
})

export class CreatePostComponent{
  post:Post;
  @ViewChild("file")
  file:any;
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService,private loginService:LoginService){
    let id=activatedRoute.snapshot.params['id'];
    this.post={title:'',author:this.loginService.user.info,creationDate:'',updateDate:'',fromGameID:id,imagePath:'',postText:'',theType:''};
  }
  createPost(){
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
