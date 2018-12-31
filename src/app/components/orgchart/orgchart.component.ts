import { Component, OnInit } from '@angular/core';
import * as OrgChart from 'orgchart.js';

@Component({
	selector: 'zm-orgchart',
	templateUrl: './orgchart.component.html',
	styleUrls: ['./orgchart.component.scss']
})
export class OrgchartComponent implements OnInit {

	constructor(
		
	) {
		
	}

	ngOnInit() {
		
		let orgchart = new OrgChart.default({
			chartContainer: '#chart-container',
			data: '#ul-data',
			draggable: true
		});
	}

}
