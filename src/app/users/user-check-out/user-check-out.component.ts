import {Component, OnInit} from '@angular/core';

export interface UserProduct {
  id: number;
  name: string;
  price: number;
  dueDay: Date;
}

const list: UserProduct[] = [
  {id: 1, name: 'Product 01', price: 200000, dueDay: new Date()},
  {id: 2, name: 'Product 02', price: 300000, dueDay: new Date()},
  {id: 3, name: 'Product 03', price: 400000, dueDay: new Date()}
];

@Component({
  selector: 'app-user-check-out',
  templateUrl: './user-check-out.component.html',
  styleUrls: ['./user-check-out.component.css']
})
export class UserCheckOutComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'dueDay' , 'select'];
  data = [];

  constructor() {
  }

  ngOnInit(): void {
    this.data = list;
  }

  getTotalCost() {
    return this.data.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
}
