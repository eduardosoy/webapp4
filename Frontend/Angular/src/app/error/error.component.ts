import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'errorPage',
  templateUrl: './error.component.html'
})
export class ErrorComponent{
  constructor(private router: Router, activatedRoute:ActivatedRoute){}
  gotoIndex() {this.router.navigate(['index'])}
}
