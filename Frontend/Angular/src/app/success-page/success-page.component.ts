import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  
})
export class SuccessPageComponent implements OnInit {

  customMessage:String;

  constructor(private router: Router, activatedRoute:ActivatedRoute) {
    let customMessage = activatedRoute.snapshot.params['customMessage'];
    this.customMessage = customMessage as String;
  }

  ngOnInit(): void {
    this.customMessage = this.customMessage as String;
  }

}
