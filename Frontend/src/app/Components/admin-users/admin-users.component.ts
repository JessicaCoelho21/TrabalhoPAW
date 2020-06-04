import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../service/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../Models/User';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit {
  @Input() users: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  /*
    this.rest.user.subscribe((selectedUser) => {
      this.selectedUser = selectedUser;
      console.log(JSON.stringify(selectedUser));
    }, (err) => {console.log(err); });
    */

    this.getUserList();
  }

  /*
  getUser(){
    console.log(this.id);
    this.rest.getUser(this.id).subscribe((data: {}) => {
      console.log(data);
      this.user = data;
      });
  }
  */

  getUserList(){
    this.users = [];

    this.rest.getListUsers().subscribe((data: {}) => {
      this.users = data;
    })
  }

  /*
  selectUser(user: User){
    this.selectedUser = user;
  }

  deleteUser(){
    this.rest.deleteUser(this.id).subscribe((data: {}) => {
      console.log(data);
    });
  }
  */
}
