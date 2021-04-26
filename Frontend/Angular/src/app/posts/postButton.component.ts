import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../interfaces/post.model';

@Component({
	selector: 'postButton',
	templateUrl: './postButton.component.html'
})
export class PostButton {

	@Input()
	post: Post;

	@Output()
	private clicked = new EventEmitter<any>();

	emitClick() {
		this.clicked.emit();
	}
}
