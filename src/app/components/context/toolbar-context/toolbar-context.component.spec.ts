import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarContextComponent } from './toolbar-context.component';

describe('ToolbarContextComponent', () => {
  let component: ToolbarContextComponent;
  let fixture: ComponentFixture<ToolbarContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
