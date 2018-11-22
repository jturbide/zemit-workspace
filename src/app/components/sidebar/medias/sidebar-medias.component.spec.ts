import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMediasComponent } from './sidebar-medias.component';

describe('SidebarMediasComponent', () => {
  let component: SidebarMediasComponent;
  let fixture: ComponentFixture<SidebarMediasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMediasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
