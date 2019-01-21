import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {MatDrawer} from '@angular/material/sidenav';
import {AppSettings} from '@shared/settings';
import {AppSettingsService} from '@shared/settings.service';
import {PageService} from '@shared/page.service';
import {ToolbarContextObject, ToolbarService} from '@shared/toolbar.service';

@Component({
	selector: 'zm-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Input() menu: MatDrawer;
	@ViewChild('toolbarTools', {read: ViewContainerRef}) weToolbarContextComponentRef: ViewContainerRef;

	public settings: AppSettings;
	public toolbarContextObject: ToolbarContextObject = null;

	constructor(
		private router: Router,
		private appSettingsService: AppSettingsService,
		public pageService: PageService,
		public toolbarService: ToolbarService,
		private componentFactoryResolver: ComponentFactoryResolver
	) {

	}

	public addComp(component: ToolbarContextObject) {

		if (component && component.tools !== null) {

			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.tools);
			const viewContainerRef = this.weToolbarContextComponentRef;
			const componentRef = viewContainerRef.createComponent(componentFactory);

			this.toolbarContextObject = component;
		}
	}

	public removeComp(component: ToolbarContextObject) {

		if (component && component.tools !== null) {

			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.tools);
			const viewContainerRef = this.weToolbarContextComponentRef;
			const componentRef = viewContainerRef.remove();

			this.toolbarContextObject = null;
		}
	}

	ngOnInit() {

		this.appSettingsService.getAll().subscribe(settings => {
			this.settings = settings;
		});

		this.toolbarService.getComponent().subscribe(component => {
			this.addComp(component);
		});

		this.router.events.subscribe(route => {
			if (route instanceof NavigationStart) {
				this.removeComp(this.toolbarContextObject);
			}
		});
	}

}
