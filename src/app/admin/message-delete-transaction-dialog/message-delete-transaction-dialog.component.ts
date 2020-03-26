import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AdminExchangeService} from '../../services/admin-exchange.service';
import {UserTransactionDTO} from '../admin-transaction-manager/admin-transaction-manager.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message-delete-transaction-dialog',
  templateUrl: './message-delete-transaction-dialog.component.html',
  styleUrls: ['./message-delete-transaction-dialog.component.css']
})
export class MessageDeleteTransactionDialogComponent implements OnInit {
  private userTransactionList: UserTransactionDTO[];

  constructor(private adminExchangeService: AdminExchangeService,
              public dialogRef: MatDialogRef<MessageDeleteTransactionDialogComponent>,
              public router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.userTransactionList = this.data.transactionSelectedList;
    for (let transactionDTO of this.userTransactionList) {
      console.log(transactionDTO.id)
    }
  }
  deleteTransaction() {
    for (let transactionDTO of this.userTransactionList){
      this.adminExchangeService.delete(transactionDTO.id).subscribe(data => {
      });
    }
    this.dialogRef.close();
  }
}
