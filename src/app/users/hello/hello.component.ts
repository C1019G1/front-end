import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/auth/account.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.hello().subscribe(data => {
      console.log(data);
    });
  }
}

