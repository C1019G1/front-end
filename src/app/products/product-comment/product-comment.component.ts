import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
