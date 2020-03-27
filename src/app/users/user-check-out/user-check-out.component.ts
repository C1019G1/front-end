import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CookieStorageService} from '../../services/auth/cookie-storage.service';
import {SelectionModel} from '@angular/cdk/collections';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ReceiveProductInfoComponent} from '../receive-product-info/receive-product-info.component';
import {CatalogueService} from '../../services/catalogue.service';


export interface UserProduct {
  id: number;
  productName: string;
  period: Date;
  fee: number;
  price: number;
  imageURLs: string[];
  productInfo: string;
  productCatalogue;
  contractPhoneNumber: string;
  contractAddress: string;
  warranty: string;
  productId: number;
  seller: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-check-out',
  templateUrl: './user-check-out.component.html',
  styleUrls: ['./user-check-out.component.css']
})
export class UserCheckOutComponent implements OnInit {
  displayedColumns: string[] = ['id', 'productName', 'price', 'period', 'select'];
  data: UserProduct[] = [];
  selection = new SelectionModel<UserProduct>(true, []);
  selectedProduct: UserProduct;
  paymentForm: FormGroup;
  codPanel = false;
  transferPanel = true;
  codStatus = true;

  constructor(
    private userService: UserService,
    private cookieStorageService: CookieStorageService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private catalogueService: CatalogueService
  ) {
  }

  ngOnInit(): void {
    const userName = this.cookieStorageService.getUsername();
    this.userService.getCart(userName).subscribe(value => {
      this.data = value;
      console.log(this.data);
    });
    this.paymentForm = this.formBuilder.group({
      paymentMethod: ['', [Validators.required]],
    });
  }

  getTotalCost() {
    return this.selection.selected.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  selectEvent(row) {
    this.selection.toggle(row);
    this.selectedProduct = row;
    console.log(this.selectedProduct.productCatalogue.id);
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
  checkboxLabel(row?: UserProduct): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  payment() {
    if (this.codPanel === true) {
      this.paymentForm.controls.paymentMethod.setValue('Trả tiền mặt khi nhận hàng');
      for (const product of this.selection.selected) {
        if (product.price > 50000000) {
          alert('Không thể thanh toán bằng phương thức này');
          return null;
        }
      }
    }
    if (this.transferPanel === true) {
      this.paymentForm.controls.paymentMethod.setValue('Chuyển khoản ngân hàng');
    }
    if (this.selection.selected.length !== 0) {
      const dialogRef = this.dialog.open(ReceiveProductInfoComponent, {
        width: '1000px',
        disableClose: true,
        data: {
          paymentMethod: this.paymentForm.controls.paymentMethod.value,
          selectedProducts: this.selection.selected,
        }
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }

  getStatus() {
    for (const product of this.selection.selected) {
      if (product.productCatalogue.id !== 1) {
        return false;
      }
    }
    return true;
  }
}
