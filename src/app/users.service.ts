import { Injectable } from '@angular/core';
import { Userdata } from './userdata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  userData: Userdata[] = [{
    id: 1,
    email: 'test@gmail.com',
    firstName: 'Collins',
    lastName: 'Obetta',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  },
  {
    id: 1,
    email: "george.bluth@reqres.in",
    firstName: "George",
    lastName: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    firstName: "Janet",
    lastName: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    firstName: "Emma",
    lastName: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg"
  }
  ];

  getAllUsers(): Userdata[] {
    return this.userData;
  }
  
  getUsersById(id: number): Userdata | undefined {
    return this.userData.find(user => user.id === id);
  }
}
