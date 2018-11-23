import { Component, OnInit } from '@angular/core';
import { PageComponent } from '@components/page/page.component';

@Component({
	selector: 'we-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements PageComponent {

	constructor() { }

	ngOnInit() {
	}

}
