import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Game } from '../models/game.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL: string = '/api/games/';
@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private httpClient: HttpClient) { }

  getGameById(id: number): Observable<Game> {
    return this.httpClient.get(BASE_URL + id).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<Game>;
  }
  getGamesByGenre(genre: string): Observable<Game[]> {
    return this.httpClient.get(BASE_URL + 'genres?genre=' + genre).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<Game[]>
  }
  getGamesPage(numPage: number): Observable<Game[]> {
    return this.httpClient.get(BASE_URL + 'pages?numPage=' + numPage.toString()).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<Game[]>;
  }
  getGames(): Observable<Game[]> {
    return this.httpClient.get(BASE_URL).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<Game[]>;
  }

  setScoreById(id: number, stars: number) {
    const params = new HttpParams().set('stars', stars.toString())
    return this.httpClient.post(BASE_URL + id + '/scores', params).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<Game>;
  }

  subscribeToGame(id: number) {
    return this.httpClient.post(BASE_URL + id + '/subscriptors', null).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<number[]>

  }

  unSubscribeToGame(id: number) {
    return this.httpClient.put(BASE_URL + id + '/subscriptors', null).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<number[]>

  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text())
  }

  createGame(game: Game) {
    if (!game.id) {
      return this.httpClient.post(BASE_URL, game).pipe(
        catchError(error => this.handleError(error))
      );
    }
    else {
      return this.httpClient.put(BASE_URL + game.id, game).pipe(
        catchError(error => this.handleError(error))
      );
    }
  }
  setGameImage(game: Game, formData: FormData) {
    return this.httpClient.post(BASE_URL + game.id + "/images", formData).pipe(
      catchError(error => this.handleError(error))
    );
  }
  deleteGamebyID(id: number) {
    return this.httpClient.delete(BASE_URL + id).pipe(
      catchError(error => this.handleError(error))
    );
  }


}
