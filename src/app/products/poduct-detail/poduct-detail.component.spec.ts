import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductDetailComponent } from './poduct-detail.component';

describe('PoductDetailComponent', () => {
  let component: PoductDetailComponent;
  let fixture: ComponentFixture<PoductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
