import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../service/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  user: any;
  @Input() password: string;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }

  updateUser() {
    console.log(this.user.userId , this.password);
    this.rest.updateAdminPassword(this.user.userId, this.password).subscribe((result) => {
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate(['admin/show/' + result._id]);
      }, (err) => {
         console.log(err);
        });
        }
}
