import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../models/game.model';



@Component({
	selector: 'subscriptionButton',
	templateUrl: './subscriptionButton.component.html'
})
export class PostButtonComponent {

	@Input()
	game: number;

	@Output()
	private clicked = new EventEmitter<any>();

	emitClick() {
		this.clicked.emit();
	}
}