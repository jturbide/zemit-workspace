import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[weSidebar]'
})
export class SidebarDirective {

	constructor(
		public viewContainerRef: ViewContainerRef  
	) {
		
	}
	
}
