import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransactionManagerComponent } from './admin-transaction-manager.component';

describe('AdminTransactionManagerComponent', () => {
  let component: AdminTransactionManagerComponent;
  let fixture: ComponentFixture<AdminTransactionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTransactionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransactionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
