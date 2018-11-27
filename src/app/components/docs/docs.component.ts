import { Component, OnInit } from '@angular/core';
import { AppSettings } from '@shared/settings';
import { AppSettingsService } from '@shared/settings.service';

@Component({
	selector: 'we-docs',
	templateUrl: './docs.component.html',
	styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
	
	public settings: AppSettings;

	constructor(
		private appSettingsService: AppSettingsService
	) {
		
	}

	ngOnInit() {
		
		this.appSettingsService.getAll().subscribe(settings => {
			this.settings = settings;
		});
	}

}
