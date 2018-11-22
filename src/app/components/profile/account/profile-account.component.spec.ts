import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccountComponent } from './profile-account.component';

describe('ProfileAccountComponent', () => {
  let component: ProfileAccountComponent;
  let fixture: ComponentFixture<ProfileAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
