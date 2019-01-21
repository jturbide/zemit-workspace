import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from '@components/sidebar/sidebar-content.component';

@Component({
	selector: 'zm-sidebar-widgets',
	templateUrl: './sidebar-widgets.component.html',
	styleUrls: ['./sidebar-widgets.component.scss']
})
export class SidebarWidgetsComponent implements OnInit, SidebarComponent {

	constructor() {
	}

	ngOnInit() {
	}

}
