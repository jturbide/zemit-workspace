import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContextStyleComponent} from './context-style.component';

describe('ContextStyleComponent', () => {
	let component: ContextStyleComponent;
	let fixture: ComponentFixture<ContextStyleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContextStyleComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContextStyleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
