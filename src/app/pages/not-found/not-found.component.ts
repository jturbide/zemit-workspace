import {Component} from '@angular/core';
import {PageComponent} from '@components/page/page.component';
import {PageService} from '@shared/page.service';

@Component({
	selector: 'zm-not-found-page',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundPageComponent implements PageComponent {

	constructor(
		private pageService: PageService
	) {

	}

	ngOnInit() {

		this.pageService.setTitle('Page not found');
	}

}
