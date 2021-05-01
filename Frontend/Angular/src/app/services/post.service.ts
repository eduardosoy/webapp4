import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

const BASE_URL_POSTS: string = 'api/posts/';
@Injectable({providedIn:'root'})
export class PostService{
  constructor(private httpClient: HttpClient,private datePipe:DatePipe) { }
    getAllPosts():Observable<Post[]>{
        return this.httpClient.get(BASE_URL_POSTS).pipe(
          catchError(error=> this.handleError(error))
        ) as Observable<Post[]>;
    }
    getPostsFromGame(id:string,theType:string,numPage:string):Observable<Post[]>{
        const params=new HttpParams().set('theType',theType)
        .set('gameID',id)
        .set('numPage',numPage);
        return this.httpClient.get(BASE_URL_POSTS+'types',{params}).pipe(
          catchError(error=> this.handleError(error))
        ) as Observable<Post[]>;
    }
    getPostByID(id: number): Observable<Post>{
        return this.httpClient.get(BASE_URL_POSTS + id).pipe(
          catchError(error => this.handleError(error))
        ) as Observable<Post>;
    }
    deletePostbyID(id:number){
        return this.httpClient.delete(BASE_URL_POSTS+id).pipe(
          catchError(error => this.handleError(error))
        );
    }
    setPostImage(post:Post, formData:FormData){
      return this.httpClient.post(BASE_URL_POSTS+post.id+"/images",formData).pipe(
        catchError(error => this.handleError(error))
      );
    }
    createNewPost(post:Post){

        if(!post.id){
          post.creationDate=this.getCurrentDate();
          post.updateDate=this.getCurrentDate();
          return this.httpClient.post(BASE_URL_POSTS,post).pipe(
            catchError(error => this.handleError(error))
          );
        }
        else{
          post.updateDate=this.getCurrentDate();
          return this.httpClient.put(BASE_URL_POSTS+post.id,post).pipe(
            catchError(error => this.handleError(error))
          );
        }
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw('Server error (' + error.status + '): ' + error.text())
	}
  getCurrentDate(){
    let date=new Date();
    let latest_date=this.datePipe.transform(date,'dd/MM/yy');
    return latest_date;
  }
}
