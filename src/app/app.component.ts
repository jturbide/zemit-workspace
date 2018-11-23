import { Component, ViewChild  } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	@ViewChild('menu') menu: MatDrawer;
	
	constructor(
		private router: Router
	) {
		
	}
	
	ngOnInit() {
		this.router.events.subscribe(route => {
			if (route instanceof NavigationEnd) {
				this.menu.close();
			}
		});
	}
}
