import {Component} from '@angular/core';
import {PageComponent} from '@components/page/page.component';
import {PageService} from '@shared/page.service';

@Component({
	selector: 'zm-about-page',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutPageComponent implements PageComponent {

	constructor(
		private pageService: PageService
	) {

	}

	ngOnInit() {

		this.pageService.setTitle('About Workspace Engine');
	}

}
