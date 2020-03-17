import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveProductInfoComponent } from './receive-product-info.component';

describe('ReceiveProductInfoComponent', () => {
  let component: ReceiveProductInfoComponent;
  let fixture: ComponentFixture<ReceiveProductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveProductInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
