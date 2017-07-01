import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'René de Leeuw';
    this.email = 'renedeleeuw66@gmail.com';
    this.address = {
      street: 'Kromme Horn 17',
      city: 'Graft',
      zip: '1484EG'
    }
    this.hobbies = ['Metal', 'Motor Sport', 'Angular', 'ECMA Script']
    this.showHobbies = true;
  }
}

interface address {
  street: string;
  city: string;
  zip: string;
}