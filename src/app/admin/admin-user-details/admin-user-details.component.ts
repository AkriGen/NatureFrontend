import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-user-details',
  standalone: false,
  
  templateUrl: './admin-user-details.component.html',
  styleUrl: './admin-user-details.component.css'
})
export class AdminUserDetailsComponent {

  users = [
    { UserID: 1, UserName: 'John Doe', Email: 'john@example.com' },
    { UserID: 2, UserName: 'Jane Doe', Email: 'jane@example.com' },
    { UserID: 3, UserName: 'Alice Smith', Email: 'alice@example.com' },
    { UserID: 4, UserName: 'Bob Johnson', Email: 'bob@example.com' },
  ];

  // Handle user deletion
  onDeleteUser(userID: number) {
    this.users = this.users.filter((user) => user.UserID !== userID);
    console.log('Deleted user with ID:', userID);
  }
}
