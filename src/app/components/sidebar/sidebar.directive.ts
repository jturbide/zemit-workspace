import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[we-sidebar]'
})
export class SidebarDirective {

	constructor(
		public viewContainerRef: ViewContainerRef  
	) {
		
	}
	
}
