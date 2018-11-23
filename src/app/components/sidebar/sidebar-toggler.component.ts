import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AppSettings } from '@shared/settings';
import { AppSettingsService } from '@shared/settings.service';

import { SidebarComponent, SidebarContentComponent } from '@components/sidebar/sidebar-content.component';
import { SidebarWorkspacesComponent } from '@components/sidebar/workspaces/sidebar-workspaces.component';
import { SidebarWidgetsComponent } from '@components/sidebar/widgets/sidebar-widgets.component';
import { SidebarMediasComponent } from '@components/sidebar/medias/sidebar-medias.component';

interface Drawer {
  title: string,
  content: SidebarComponent,
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
	@Input() currentDrawer: SidebarComponent;
	@Input() sidebarContent: SidebarContentComponent;
	
	private settings: AppSettings;
	private drawers: Array<Drawer> = [];
	
	constructor(
		private appSettingsService: AppSettingsService
	) {
		
		let workspace: Drawer = {
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
		
		let widgets: Drawer = {
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
		
		let medias: Drawer = {
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
	
	addDrawer(drawer: Drawer): void {
		
		this.drawers.push(drawer);
	}
	
	openDrawer(drawer: SidebarComponent): void {
		
		if(drawer === this.currentDrawer) {
			this.drawer.close();
			this.currentDrawer = null;
		}
		else {
			this.drawer.open();
			this.currentDrawer = drawer;
			this.sidebarContent.addComp();
		}
	}
}