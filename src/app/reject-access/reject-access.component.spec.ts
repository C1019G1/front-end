import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectAccessComponent } from './reject-access.component';

describe('RejectAccessComponent', () => {
  let component: RejectAccessComponent;
  let fixture: ComponentFixture<RejectAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
