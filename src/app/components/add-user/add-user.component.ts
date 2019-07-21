import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  user = {} as User;

  constructor(public userService: UserService) {}

  ngOnInit() {}

  addUser() {
    this.userService.addUsers(this.user);

    // This line is to clean the inputs
    this.user = {} as User;
  }
}
