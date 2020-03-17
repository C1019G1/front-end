import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductManagerComponent } from './admin-product-manager.component';

describe('AdminProductManagerComponent', () => {
  let component: AdminProductManagerComponent;
  let fixture: ComponentFixture<AdminProductManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
