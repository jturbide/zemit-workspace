import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';
import { PageService } from '@shared/page.service';

@Component({
	selector: 'zm-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements PageComponent {

	constructor(
		private pageService: PageService
	) {
		
	}

	ngOnInit() {
		
		this.pageService.setTitle('Dashboard');
	}

}
