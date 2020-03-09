import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';
import {AdminUserCreateComponent} from '../admin-user-create/admin-user-create.component';
import {AdminUserLockComponent} from '../admin-user-lock/admin-user-lock.component';
import {AdminUserListService} from '../../services/admin-user-list.service';
import {HttpClient} from '@angular/common/http';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RankListService} from '../../services/rank-list.service';
import {AdminUserProfileSearchDialogComponent} from '../admin-user-profile-search-dialog/admin-user-profile-search-dialog.component';

export interface UserProfilebApi {
  content: UserProfileDTO[];
  totalElements: number;
}

export interface UserProfileDTO {
  id;
  name;
  address;
  rank;
  email;
  phoneNumber;
  lastLogin;
  contributePoint;
  status;
}

@Component({
  selector: 'app-admin-user-manager',
  templateUrl: './admin-user-manager.component.html',
  styleUrls: ['./admin-user-manager.component.css']
})
export class AdminUserManagerComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'rank', 'email', 'phoneNumber', 'lastLogin', 'contributePoint', 'select'];
  data: UserProfileDTO[] = [];
  userDTO: UserProfileDTO;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  selection = new SelectionModel<UserProfileDTO>(true, []);
  rankList = [];
  size: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  formUserSearch: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private rankListService: RankListService,
    private adminUserListService: AdminUserListService
  ) {
  }

  ngOnInit(): void {
    this.size = 5;
    this.rankListService.getRankList().subscribe(data => {
      this.rankList = data;
    });
    this.formUserSearch = this.formBuilder.group({
      name: [''],
      rank: [''],
      id: ['', Validators.pattern('^[0-9]+$')],
      email: ['', [Validators.email]],
    });
  }

  ngAfterViewInit(): void {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.adminUserListService.getUserProfileList(
            this.paginator.pageIndex, this.paginator.pageSize, this.formUserSearch.controls.name.value, this.formUserSearch.controls.rank.value);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.totalElements;
          return data.content;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
      this.data = data;
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserProfileDTO): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  openUserCreateDialog() {
    const dialogRef = this.dialog.open(AdminUserCreateComponent, {
      width: '50%',
      minWidth: '300px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openUserLockDialog() {
    console.log(this.selection.selected);
    const dialogRef = this.dialog.open(AdminUserLockComponent, {
      width: '50%',
      minWidth: '300px',
      disableClose: true,
      data: {users: this.selection.selected}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // onTableScroll(e) {
  //   const tableViewHeight = e.target.offsetHeight // viewport: ~500px
  //   const tableScrollHeight = e.target.scrollHeight // length of all table
  //   const scrollLocation = e.target.scrollTop; // how far user scrolled
  //   console.log(e.target.scrollTop)
  //   // If the user has scrolled within 200px of the bottom, add more data
  //   const buffer = 50;
  //   const limit = tableScrollHeight - tableViewHeight - buffer;
  //   if (scrollLocation > limit) {
  //     this.dataSource = this.dataSource.concat(UserList2);
  //   }
  // }

  filter() {
    if (confirm('Hành động này sẽ làm mới bản ghi!!!')) {
      this.ngAfterViewInit();
    }
  }

  search() {
    if (confirm('Hành động này sẽ làm mới bản ghi!!!')) {
      console.log(123);
      this.adminUserListService.findUserProfile(this.formUserSearch.controls.id.value, this.formUserSearch.controls.email.value)
        .subscribe(data => {
          if (data != null) {
            this.userDTO = data;
            this.data=[this.userDTO];
          } else {
            this.data=[];
          }
          this.resultsLength = this.data.length;
        });
    }
  }
}
