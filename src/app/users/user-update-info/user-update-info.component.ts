import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-user-update-info',
  templateUrl: './user-update-info.component.html',
  styleUrls: ['./user-update-info.component.css']
})
export class UserUpdateInfoComponent implements OnInit {
  public formUpdateInfo: FormGroup;
  public idUser;

  constructor(
  ) {
  }

  ngOnInit(): void {
    // this.formUpdateInfo = this.formBuilder.group({

    // });
  }

  // updateInfo() {
  // }
}
