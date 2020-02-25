import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRegisterAuctionComponent } from './history-register-auction.component';

describe('HistoryRegisterAuctionComponent', () => {
  let component: HistoryRegisterAuctionComponent;
  let fixture: ComponentFixture<HistoryRegisterAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRegisterAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRegisterAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
