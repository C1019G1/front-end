import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckProductComponent } from './admin-check-product.component';

describe('AdminCheckProductComponent', () => {
  let component: AdminCheckProductComponent;
  let fixture: ComponentFixture<AdminCheckProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCheckProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
