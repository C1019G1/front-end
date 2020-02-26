import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';
import {AdminUserCreateComponent} from '../admin-user-create/admin-user-create.component';
import {AdminUserLockComponent} from '../admin-user-lock/admin-user-lock.component';

export interface User {
  id;
  name;
  address;
  rank;
  email;
  phoneNumber;
  lastLogin;
  contributePoint;
}

const UserList: User[] = [
  {
    id: 1,
    name: 'test1',
    address: 'đà nẵng',
    rank: 'kim cương',
    email: 'a@gmail.com',
    phoneNumber: '090090090',
    lastLogin: '12/1/2011',
    contributePoint: '8'
  },
  {
    id: 2,
    name: 'test2',
    address: 'đà nẵng',
    rank: 'vàng',
    email: 'a@gmail.com',
    phoneNumber: '090090090',
    lastLogin: '12/1/2011',
    contributePoint: '10'
  },
  {
    id: 3,
    name: 'test3',
    address: 'quảng nam',
    rank: 'bạc',
    email: 'a@gmail.com',
    phoneNumber: '090090090',
    lastLogin: '12/1/2011',
    contributePoint: '12'
  },
  {
    id: 4,
    name: 'test4',
    address: 'quảng nam',
    rank: 'bạc',
    email: 'a@gmail.com',
    phoneNumber: '090090090',
    lastLogin: '12/1/2011',
    contributePoint: '13'
  },
  {
    id: 5,
    name: 'test5',
    address: 'Huế',
    rank: 'đồng',
    email: 'a@gmail.com',
    phoneNumber: '090090090',
    lastLogin: '12/1/2011',
    contributePoint: '2'
  },
  {
    id: 6,
    name: 'test5',
    address: 'Huế',
    rank: 'đồng',
    email: 'a@gmail.com',
    phoneNumber: '090090090',
    lastLogin: '12/1/2011',
    contributePoint: '8'
  },
];

@Component({
  selector: 'app-admin-user-manager',
  templateUrl: './admin-user-manager.component.html',
  styleUrls: ['./admin-user-manager.component.css']
})
export class AdminUserManagerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'rank', 'email', 'phoneNumber', 'lastLogin', 'contributePoint', 'select'];
  dataSource = new MatTableDataSource<User>(UserList);
  selection = new SelectionModel<User>(true, []);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  openUserCreateDialog() {
    const dialogRef = this.dialog.open(AdminUserCreateComponent, {
      width: '50%',
      minWidth: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openUserLockDialog(){
    console.log(this.selection.selected)
    const dialogRef = this.dialog.open(AdminUserLockComponent, {
      width: '50%',
      minWidth: '300px',
      data:{users: this.selection.selected}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
