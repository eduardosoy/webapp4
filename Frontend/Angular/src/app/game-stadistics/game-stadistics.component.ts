import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-stadistics',
  templateUrl: './game-stadistics.component.html',
  
})
export class GameStadisticsComponent  {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  returnIndex() {this.router.navigate(['index']);}
}
