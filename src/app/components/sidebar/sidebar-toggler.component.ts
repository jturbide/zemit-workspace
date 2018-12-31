import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AppSettings } from '@shared/settings';
import { AppSettingsService } from '@shared/settings.service';

import { SidebarComponent, SidebarContentComponent } from '@components/sidebar/sidebar-content.component';
import { SidebarWorkspacesComponent } from '@components/sidebar/workspaces/sidebar-workspaces.component';
import { SidebarWidgetsComponent } from '@components/sidebar/widgets/sidebar-widgets.component';
import { SidebarMediasComponent } from '@components/sidebar/medias/sidebar-medias.component';

export class SidebarDrawer {
	title: string = null;
	content: SidebarComponent = null;
	isDisabled(): boolean {
		return false;
	};
	isVisible(): boolean {
		return true;
	};
}

@Component({
	selector: 'zm-sidebar-toggler',
	templateUrl: './sidebar-toggler.component.html',
	styleUrls: ['./sidebar-toggler.component.scss']
})
export class SidebarTogglerComponent implements OnInit {
	
	@Input() drawer: MatDrawer;
	@Input() sidebarContent: SidebarContentComponent;
	
	public settings: AppSettings;
	public drawers: Array<SidebarDrawer> = [];
	private currentDrawer: SidebarDrawer = null;
	
	constructor(
		private appSettingsService: AppSettingsService
	) {
		
		let workspace: SidebarDrawer = {
			title: 'Workspaces',
			content: SidebarWorkspacesComponent,
			isDisabled: () => {
				return !this.settings.isConnected;
			},
			isVisible: () => {
				return true;
			}
		};
		this.addDrawer(workspace);
		
		let widgets: SidebarDrawer = {
			title: 'Widgets',
			content: SidebarWidgetsComponent,
			isDisabled: () => {
				return true;
			},
			isVisible: () => {
				return true;
			}
		};
		this.addDrawer(widgets);
		
		let medias: SidebarDrawer = {
			title: 'Medias',
			content: SidebarMediasComponent,
			isDisabled: () => {
				return true;
			},
			isVisible: () => {
				return true;
			}
		};
		this.addDrawer(medias);
	}

	ngOnInit() {
		
		this.appSettingsService.getAll().subscribe(settings => {
			this.settings = settings;
		});
	}
	
	addDrawer(drawer: SidebarDrawer): void {
		
		this.drawers.push(drawer);
	}
	
	openDrawer(drawer: SidebarDrawer): void {
		
		if(drawer === this.currentDrawer) {
			
			this.drawer.close().then(() => {
				this.sidebarContent.removeComp(drawer);
				this.currentDrawer = null;
			});
		}
		else {
			
			this.sidebarContent.addComp(drawer);
			this.drawer.open().then(() => {
				this.currentDrawer = drawer;
			});;
		}
	}
}
