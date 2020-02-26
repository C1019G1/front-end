import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserLockComponent } from './admin-user-lock.component';

describe('AdminUserLockComponent', () => {
  let component: AdminUserLockComponent;
  let fixture: ComponentFixture<AdminUserLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
