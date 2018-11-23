import { Component, ComponentRef, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AppSettings } from '@shared/settings';
import { AppSettingsService } from '@shared/settings.service';

import { SidebarWorkspacesComponent } from '@components/sidebar/workspaces/sidebar-workspaces.component';
import { SidebarWidgetsComponent } from '@components/sidebar/widgets/sidebar-widgets.component';
import { SidebarMediasComponent } from '@components/sidebar/medias/sidebar-medias.component';

interface Drawer {
  sidebarToggler: string,
  sidebarContent: any,
  isDisabled(): boolean,
  isVisible(): boolean
}

@Component({
	selector: 'we-sidebar-toggler',
	templateUrl: './sidebar-toggler.component.html',
	styleUrls: ['./sidebar-toggler.component.scss']
})
export class SidebarTogglerComponent implements OnInit {
	
	@Input() drawer: MatDrawer;
	currentDrawer: string = null;
	
	private settings: AppSettings;
	private drawers: Array<Drawer> = [];
	
	constructor(
		private appSettingsService: AppSettingsService
	) {
		
		let workspace: Drawer = {
			sidebarToggler: 'Workspaces',
			sidebarContent: SidebarWorkspacesComponent,
			isDisabled: () => {
				return !this.settings.isConnected;
			},
			isVisible: () => {
				return true;
			}
		};
		this.addDrawer(workspace);
		
		let widgets: Drawer = {
			sidebarToggler: 'Widgets',
			sidebarContent: SidebarWidgetsComponent,
			isDisabled: () => {
				return true;
			},
			isVisible: () => {
				return true;
			}
		};
		this.addDrawer(widgets);
		
		let medias: Drawer = {
			sidebarToggler: 'Medias',
			sidebarContent: SidebarMediasComponent,
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
	
	addDrawer(drawer: Drawer): void {
		
		this.drawers.push(drawer);
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