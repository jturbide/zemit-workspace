import { Component, OnInit, Directive, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'zm-toolbar-context',
	templateUrl: './context.component.html',
	styleUrls: ['./context.component.scss']
})
export class ToolbarContextComponent implements OnInit {

	constructor(
		
	) {
		
	}

	ngOnInit() {
		
	}

}

@Directive({
	selector: '[zm-toolbar-context-component]'
})
export class ToolbarContextComponentDirective {

	constructor(
		public viewContainerRef: ViewContainerRef  
	) {
		
	}
	
}
