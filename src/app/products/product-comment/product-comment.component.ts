import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {CookieStorageService} from '../../services/auth/cookie-storage.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

export class Comment {
  displayName: string;
  creationDate: number;
  message: string;
}

@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.css']
})
export class ProductCommentComponent implements OnInit {
  @Input() private productID: string;
  list: Observable<Comment[]>;
  private itemsCollection: AngularFirestoreCollection<Comment>;
  commentForm: FormGroup;
  userName;
  size = 0;
  getAll = false;

  constructor(
    private afs: AngularFirestore,
    private cookieStorageService: CookieStorageService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      displayName: [''],
      creationDate: [''],
      message: ['']
    });
    this.userName = this.cookieStorageService.getUsername();
    this.getComment();
  }

  getComment() {
    this.itemsCollection =
      this.afs.collection('product')
        .doc(this.productID)
        .collection<Comment>('comment', ref => ref.limit(5)
          .orderBy('creationDate', 'desc'));
    this.list = this.itemsCollection.valueChanges();
  }

  getAllComment() {
    this.getAll = true;
    this.itemsCollection =
      this.afs.collection('product')
        .doc(this.productID)
        .collection<Comment>('comment', ref => ref.orderBy('creationDate', 'desc'));
    this.list = this.itemsCollection.valueChanges();
  }

  saveComment() {
    if (this.cookieStorageService.getUsername() !== '') {
      this.commentForm.controls.displayName.setValue(this.cookieStorageService.getUsername());
      this.commentForm.controls.creationDate.setValue(Date.now());
      this.afs.collection('product')
        .doc(this.productID)
        .collection('comment')
        .add(this.commentForm.value);
    }
  }
}
