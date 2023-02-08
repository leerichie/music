import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public users: User[];
  public updateUser: User;
  public deleteUser: User;

  register(regForm: { value: User; }) {
    this.userService.addUser(regForm.value).subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  constructor(private userService: UserService) {}


  public getUsers(): void {
    this.userService.getUser().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
  ngOnInit() {
    this.getUsers();

  }
  public deleteU(userId: User): void {
    this.users = this.users.filter(u => u !==userId);
    this.userService.deleteUser(userId).subscribe;
  }
}