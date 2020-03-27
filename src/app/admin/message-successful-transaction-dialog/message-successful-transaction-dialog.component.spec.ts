import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSuccessfulTransactionDialogComponent } from './message-successful-transaction-dialog.component';

describe('MessageSuccessfulTransactionDialogComponent', () => {
  let component: MessageSuccessfulTransactionDialogComponent;
  let fixture: ComponentFixture<MessageSuccessfulTransactionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSuccessfulTransactionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSuccessfulTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
