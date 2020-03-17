import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConformExchangeComponent } from './dialog-conform-exchange.component';

describe('DialogConformExchangeComponent', () => {
  let component: DialogConformExchangeComponent;
  let fixture: ComponentFixture<DialogConformExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConformExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConformExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
