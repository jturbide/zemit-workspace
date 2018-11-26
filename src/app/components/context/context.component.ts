import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';
import { PageService } from '@shared/page.service';

@Component({
	selector: 'we-context',
	templateUrl: './context.component.html',
	styleUrls: ['./context.component.scss']
})
export class ContextPageComponent implements PageComponent {

	constructor(
		private pageService: PageService
	) {
		
	}

	ngOnInit() {
		
		this.pageService.setTitle('Context');
	}

}
