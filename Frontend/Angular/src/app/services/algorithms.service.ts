import { Game } from './../models/game.model';
import { Genres } from './../enums/Genres';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';

@Injectable({providedIn:'root'})
export class AlgorithmsService{
  constructor(private httpClient: HttpClient) { }

  /*recommendedAlgorithm(user:User){
    let amountOfGamesWithGenre= new Map();
    Object.values(Genres).forEach(genre =>
        amountOfGamesWithGenre.set(genre,0)
      );
    user.getSubscriptions.foreach(game =>
      console.log("needs users!")
      //amountOfGamesWithGenre.set(getgamebyid por parametro game y get genre,get entrada en el mapa del genre y sumarle 1)
      );
    //encontrar entrada mayor y devolver el genre.
  }*/
  doAverageScore(scores:Map<number,number>){
    let aux=0.0;
    scores.forEach(score =>
      aux+=score
      );
      aux = aux/(scores.size);
      aux = aux*10;
      aux = Math.round(aux);
      aux = aux/10;
      return aux;
  }

}
