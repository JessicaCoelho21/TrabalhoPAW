import { Component, OnInit, Input } from '@angular/core';

import { RestService } from '../../service/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  @Input() userData: any;
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getUser(this.route.snapshot.params.userId).subscribe((data: {}) => {
       console.log(data);
       });
  }

  updateUser() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.rest.updateUser(user.userId, this.userData).subscribe((result) => {
       console.log(result._id);
       this.router.navigate(['user/show/' + result._id]);
       }, (err) => {
          console.log(err);
      });
    }
}