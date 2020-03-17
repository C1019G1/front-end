import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeManagerComponent } from './exchange-manager.component';

describe('ExchangeManagerComponent', () => {
  let component: ExchangeManagerComponent;
  let fixture: ComponentFixture<ExchangeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
