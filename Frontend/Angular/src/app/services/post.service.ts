import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL_POSTS: string = 'api/posts/';
@Injectable({providedIn:'root'})
export class PostService{
  constructor(private httpClient: HttpClient) { }
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
    createNewPost(post:Post): Observable<Post>{
        return this.httpClient.post(BASE_URL_POSTS,post).pipe(
          catchError(error => this.handleError(error))
        ) as Observable<Post>;
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw('Server error (' + error.status + '): ' + error.text())
	}
}
