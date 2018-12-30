import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ToolbarContextComponent } from '@components/toolbar/context/context.component';

export class ToolbarContextObject {
    tools: Type<ToolbarContextComponent> = null;
}

@Injectable({
	providedIn: 'root'
})
export class ToolbarService {

	private component: BehaviorSubject<ToolbarContextObject> =
		new BehaviorSubject<ToolbarContextObject>(new ToolbarContextObject());
	
	constructor(
		
	) {
		
	}
	
	setTools(component: Type<ToolbarContextComponent>) {
		
		this.component.getValue().tools = component;
		this.component.next(this.component.getValue());
	}
	
	getComponent(): BehaviorSubject<ToolbarContextObject> {
		
		return this.component;
	}
	
	unsetComponent() {
		
		this.component.getValue().tools = null;
		this.component.next(this.component.getValue());
	}
}