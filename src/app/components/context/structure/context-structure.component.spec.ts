import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContextStructureComponent} from './context-structure.component';

describe('ContextStructureComponent', () => {
	let component: ContextStructureComponent;
	let fixture: ComponentFixture<ContextStructureComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContextStructureComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContextStructureComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
