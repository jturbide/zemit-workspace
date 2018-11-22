import { Component, ViewChild  } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	constructor(
		private router: Router
	) {
		
	}
	
	ngOnInit() {
		this.router.events.subscribe(route => {
			if (route instanceof NavigationEnd) {
				// this.context.value = route.url;
			}
		});
	}
}
