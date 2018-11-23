import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SidebarDirective } from './sidebar.directive';
import { MatDrawer } from '@angular/material/sidenav';

export interface SidebarComponent {
	
}

@Component({
	selector: 'we-sidebar-content',
	templateUrl: './sidebar-content.component.html',
	styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
	
	@Input() drawer: MatDrawer;
	@Input() currentDrawer: SidebarComponent;
	@ViewChild(SidebarDirective) weSidebar: SidebarDirective;
	
	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) {
		
	}
	
	public addComp() {
		
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentDrawer);
		const viewContainerRef = this.weSidebar.viewContainerRef;
		const componentRef = viewContainerRef.createComponent(componentFactory);
	}
	public removeComp() {
		
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentDrawer);
		const viewContainerRef = this.weSidebar.viewContainerRef;
		const componentRef = viewContainerRef.remove();
	}

	ngOnInit() {
		
	}
}