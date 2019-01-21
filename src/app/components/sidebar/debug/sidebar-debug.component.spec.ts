import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarDebugComponent} from './sidebar-debug.component';

describe('SidebarDebugComponent', () => {
	let component: SidebarDebugComponent;
	let fixture: ComponentFixture<SidebarDebugComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SidebarDebugComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SidebarDebugComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
