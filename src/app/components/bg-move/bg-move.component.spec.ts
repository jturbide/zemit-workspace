import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BgMoveComponent} from './bg-move.component';

describe('BgMoveComponent', () => {
	let component: BgMoveComponent;
	let fixture: ComponentFixture<BgMoveComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BgMoveComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BgMoveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
