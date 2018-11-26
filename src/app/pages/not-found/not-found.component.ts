import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';
import { PageService } from '@shared/page.service';

@Component({
	selector: 'we-not-found-page',
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
