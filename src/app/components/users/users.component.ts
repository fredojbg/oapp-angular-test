import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users = [];
  editingUser: User;
  editing: boolean = false;
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

  deleteUser(event, user) {
    this.userService.deleteUser(user);
  }

  editUser(event, user) {
    this.editingUser = user;
    this.editing = !this.editing;
  }

  updateUser() {
    this.userService.updateUser(this.editingUser);
    this.editingUser = {} as User;
    this.editing = false;
  }
}
