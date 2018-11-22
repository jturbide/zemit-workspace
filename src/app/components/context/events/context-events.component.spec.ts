import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextEventsComponent } from './context-events.component';

describe('ContextEventsComponent', () => {
  let component: ContextEventsComponent;
  let fixture: ComponentFixture<ContextEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
