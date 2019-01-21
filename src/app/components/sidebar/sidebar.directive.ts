import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
	selector: '[zm-sidebar]'
})
export class SidebarDirective {

	constructor(
		public viewContainerRef: ViewContainerRef
	) {

	}

}
