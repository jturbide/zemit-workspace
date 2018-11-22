import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'de-sidebar-toggler',
	templateUrl: './sidebar-toggler.component.html',
	styleUrls: ['./sidebar-toggler.component.scss']
})
export class SidebarTogglerComponent implements OnInit {
	
	@Input() drawer: MatDrawer;
	currentDrawer: string = null;
	
	constructor() {
		
	}

	ngOnInit() {
		
	}
	
	openDrawer(drawerName: string): void {
		
		if(drawerName === this.currentDrawer) {
			this.drawer.close();
			this.currentDrawer = null;
		}
		else {
			this.drawer.open();
			this.currentDrawer = drawerName;
		}
	}
}