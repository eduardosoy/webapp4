import { PostService } from './../services/post.service';
import { PostButton } from './postButton.component';
import { Post } from '../interfaces/post.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'listPosts',
  templateUrl: './listPosts.component.html'
})

export class ListPostsComponent{
  posts: Post[]=[];
  typeString="";
  constructor(private router: Router, activatedRoute:ActivatedRoute,private pService:PostService) {
    this.pService.getAllPosts().subscribe(
      posts=>{
        this.posts=posts as Post[];

      },
    )
    //this.typeString=this.posts[0].postType.toString();
   }
  gotoExpandedPost(theID:number){
    this.router.navigate(['listPosts/'+theID])
  }
  gotoIndex() {this.router.navigate(['index'])}
}
