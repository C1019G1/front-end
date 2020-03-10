import {Component, Inject, OnInit, NgZone, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {UserProfileDTO} from '../admin-user-manager/admin-user-manager.component';

@Component({
  selector: 'app-admin-user-lock',
  templateUrl: './admin-user-lock.component.html',
  styleUrls: ['./admin-user-lock.component.css']
})
export class AdminUserLockComponent implements OnInit {
  lockTimeStart;
  lockTimeEnd;
  today = new Date();
  content = '';
  reason = '';
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  removable = true;

  constructor(
    public dialogRef: MatDialogRef<AdminUserLockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ngZone: NgZone
  ) {
  }

  ngOnInit(): void {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  remove(user: UserProfileDTO): void {
    const index = this.data.users.indexOf(user);

    if (index >= 0) {
      this.data.users.splice(index, 1);
    }
  }

  onCancelClick() {
    this.dialogRef.close({users:this.data.users});
  }
}
