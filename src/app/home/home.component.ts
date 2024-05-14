import { Component } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UsersListComponent
  ],
  template: `
  <section class="w-96 md:pl-8 md:pr-8 md:w-screen">
    <form class="flex flex-row justify-between w-full md:justify-center">
      <input class="border shadow w-4/5 p-2 mr-6" type="text" placeholder=" Search by ID">
      <button class="bg-yellow-400 hover:bg-opacity-50 font-bold py-2 px-4 rounded" type="button">Search</button>
    </form>
  </section>
  <section class="w-96 md:pl-8 md:pr-8 md:w-screen">
    <app-users-list></app-users-list>
  </section>
  `,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
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

}
