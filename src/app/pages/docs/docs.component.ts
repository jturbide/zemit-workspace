import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';
import { PageService } from '@shared/page.service';

@Component({
	selector: 'zm-docs-page',
	templateUrl: './docs.component.html',
	styleUrls: ['./docs.component.scss']
})
export class DocsPageComponent implements PageComponent {

	constructor(
		private pageService: PageService
	) {
		
	}

	ngOnInit() {
		
		this.pageService.setTitle('Documentation');
	}

}
