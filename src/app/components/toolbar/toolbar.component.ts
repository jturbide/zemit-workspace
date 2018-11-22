import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'de-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
		
	title: string = 'Desk Engine';

	constructor() { }

	ngOnInit() {
			
	}

}
