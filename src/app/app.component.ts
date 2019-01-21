import { Component, ViewChild  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '@shared/settings';
import { AppSettingsService } from '@shared/settings.service';
import { MatDrawer } from '@angular/material/sidenav';
import { ProfileService } from '@shared/profile.service';
import { User } from '@models/user.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	@ViewChild('menu') menu: MatDrawer;

	public settings: AppSettings;
	public currentUser: User = null;

	constructor(
		private router: Router,
		private profileService: ProfileService,
		private appSettingsService: AppSettingsService
	) {

	}

	ngOnInit() {

		this.currentUser = this.profileService.getCurrentUser();

		this.appSettingsService.getAll().subscribe(settings => {
			this.settings = settings;
		});

		this.router.events.subscribe(route => {
			if (route instanceof NavigationEnd) {
				this.menu.close();
			}
		});
	}
}
