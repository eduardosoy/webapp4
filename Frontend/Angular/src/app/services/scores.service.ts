import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL: string = '/api/games/';
@Injectable({ providedIn: 'root' })
export class ScoresService {

  constructor(private httpClient: HttpClient) { }

  getScoresById(id: number): Observable<Map<number, number>> {
    return this.httpClient.get(BASE_URL + id + '/scores').pipe(
      catchError(error => this.handleError(error))
    ) as Observable<Map<number, number>>;
  }

  doAverageRatio(myScores: Map<number, number>, index: Number) {
    let aux = 0;
    let numberofindexinthearray = 0;
    for (let value of myScores.values()) {
      if (value.valueOf() == index) {
        numberofindexinthearray++;
      }
    }
    aux = (numberofindexinthearray * 100) / (myScores.size);
    return aux;
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text())
  }
}
