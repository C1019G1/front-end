import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDialogeComponent } from './message-dialoge.component';

describe('MessageDialogeComponent', () => {
  let component: MessageDialogeComponent;
  let fixture: ComponentFixture<MessageDialogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDialogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
