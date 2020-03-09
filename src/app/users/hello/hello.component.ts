import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/auth/account.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.accountService.hello().subscribe(data => {
      console.log(data);
    },
      error => {
      if (error.status === 403){
        console.log('ok');
      }
       // this.router.navigateByUrl('/user/login');
      }
    );
  }
}

