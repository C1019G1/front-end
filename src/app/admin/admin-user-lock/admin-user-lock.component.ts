import {Component, Inject, OnInit, NgZone, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-admin-user-lock',
  templateUrl: './admin-user-lock.component.html',
  styleUrls: ['./admin-user-lock.component.css']
})
export class AdminUserLockComponent implements OnInit {
  userList = [];
  lockTimeStart;
  lockTimeEnd;
  today = new Date();
  content = '';
  reason = '';
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(
    public dialogRef: MatDialogRef<AdminUserLockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ngZone: NgZone
  ) {
  }

  ngOnInit(): void {
    this.userList = this.data.users;
    let count = 1;
    for (const user of this.userList) {
      if (count !== this.userList.length) {
        this.content += user.name + '(' + user.id + '),\n';
      } else {
        this.content += user.name + '(' + user.id + ')';
      }
      count++;
    }
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
