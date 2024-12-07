import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  savedAddresses: any[] = [];

  constructor(private addressService: AddressService,private userServices :UserService) {}

  ngOnInit(): void {
    // Subscribe to get the list of saved addresses
    this.addressService.getSavedAddresses().subscribe((addresses) => {
      this.savedAddresses = addresses;
    });
    this.loadUserData();
  }
  activeTab: number = 0;

  user = {
    name: '',
    email: '',
    contact: '',
    password: ''
  };
  isEditMode: boolean = false;

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  updatedUser() {
    // Update user logic here (e.g., send updated data to server)
    this.isEditMode = false;
  }
  setTab(index: number): void {
    this.activeTab = index;
  }

  updateUser(): void {
    localStorage.setItem('userData', JSON.stringify(this.user));
    alert('User details updated successfully and saved to local storage!');
  }

  loadUserData(): void {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      this.user = JSON.parse(storedData);
    }
  }
}
