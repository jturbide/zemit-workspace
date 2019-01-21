import {Component} from '@angular/core';
import {PageComponent} from '@components/page/page.component';
import {PageService} from '@shared/page.service';

@Component({
	selector: 'zm-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardPageComponent implements PageComponent {

	constructor(
		private pageService: PageService
	) {

	}

	ngOnInit() {

		this.pageService.setTitle('Dashboard');
	}

}
