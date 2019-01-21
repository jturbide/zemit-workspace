import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarWorkspacesComponent} from './sidebar-workspaces.component';

describe('SidebarWorkspacesComponent', () => {
	let component: SidebarWorkspacesComponent;
	let fixture: ComponentFixture<SidebarWorkspacesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SidebarWorkspacesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SidebarWorkspacesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
