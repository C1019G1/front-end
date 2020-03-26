import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDeleteTransactionDialogComponent } from './message-delete-transaction-dialog.component';

describe('MessageDeleteTransactionDialogComponent', () => {
  let component: MessageDeleteTransactionDialogComponent;
  let fixture: ComponentFixture<MessageDeleteTransactionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDeleteTransactionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDeleteTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
