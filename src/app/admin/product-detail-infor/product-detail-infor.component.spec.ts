import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailInforComponent } from './product-detail-infor.component';

describe('ProductDetailInforComponent', () => {
  let component: ProductDetailInforComponent;
  let fixture: ComponentFixture<ProductDetailInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
