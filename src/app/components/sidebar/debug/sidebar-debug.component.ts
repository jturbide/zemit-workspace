import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from '@components/sidebar/sidebar-content.component';

@Component({
	selector: 'zm-sidebar-debug',
	templateUrl: './sidebar-debug.component.html',
	styleUrls: ['./sidebar-debug.component.scss']
})
export class SidebarDebugComponent implements OnInit, SidebarComponent {

	constructor() {
	}

	ngOnInit() {
	}

}
