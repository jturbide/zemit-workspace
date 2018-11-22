import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidgetsComponent } from './sidebar-widgets.component';

describe('SidebarWidgetsComponent', () => {
  let component: SidebarWidgetsComponent;
  let fixture: ComponentFixture<SidebarWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
