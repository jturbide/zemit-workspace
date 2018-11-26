import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';
import { PageService } from '@shared/page.service';

@Component({
	selector: 'we-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements PageComponent {

	constructor(
		private pageService: PageService
	) {
		
	}

	ngOnInit() {
		
		this.pageService.setTitle('Workspace Engine');
	}

}
