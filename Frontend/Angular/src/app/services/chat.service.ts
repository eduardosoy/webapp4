import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams  } from '@angular/common/http';
import { Game } from '../models/game.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Chat } from '../models/chat.model';

const BASE_URL: string = '/api/chats/';
@Injectable({providedIn: 'root' })
  export class ChatService {
    constructor(private httpClient: HttpClient) { }
    getChatById(id: number): Observable<Chat>{
        return this.httpClient.get(BASE_URL + id).pipe(
          catchError(error => this.handleError(error))
        ) as Observable<Chat>;
    }

    setNewMessage(id: number,messageSentToChat:String) {
        const params=new HttpParams().set('message',messageSentToChat.toString())
        return this.httpClient.put(BASE_URL + id, params).pipe(			
          catchError(error => this.handleError(error))
        ) as Observable<Chat>;
      }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw('Server error (' + error.status + '): ' + error.text())
	}
  }