import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PageService {

	private title = 'Workspace Engine';

	constructor() {

	}

	setTitle(title: string) {

		this.title = title;
	}

	getTitle() {

		return this.title;
	}
}
