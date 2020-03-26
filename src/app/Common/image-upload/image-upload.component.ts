import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  @Input() file: File;
  @Input() index;
  @Output() outputLinkURL = new EventEmitter<any>();
  @Output() deleteImage = new EventEmitter<any>();
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage) {
  }



  ngOnInit(): void {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    const path = `image/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      // tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise(); // upload xong get link ngay lap thuc
        // this.db.collection('product-img').doc(`${this.productId}`).set({downloadURL: this.downloadURL, path});
        this.outputLinkURL.emit({downloadURL: this.downloadURL});
      }),
    );
  }

  deleteAttachment() {
    this.deleteImage.emit({index: this.index, downloadURL: this.downloadURL});
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
