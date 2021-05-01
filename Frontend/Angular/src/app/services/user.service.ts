import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL: string = 'api/profiles/';
@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUserById(id: number): Observable<User> {
    return this.httpClient.get(BASE_URL + id).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<User>;
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get(BASE_URL).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<User[]>;
  }

  createNewUser(user: User) {
    return this.httpClient.post(BASE_URL,user).pipe(
      catchError(error => this.handleError(error))
    ) as Observable<number[]>;
  }

  getSubscriptions(id:number): Observable<number[]> {
    return this.httpClient.get(BASE_URL + id + '/subscriptions').pipe(
      catchError(error => this.handleError(error))
    ) as Observable<number[]>;
  }

  setUserImage(user:User, formData:FormData){
    return this.httpClient.post(BASE_URL +user.id+"/images",formData).pipe(
      catchError(error => this.handleError(error))
    );
  }


  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text())
  }
}