import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersService } from '../users.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    UsersListComponent
  ],
  template: `
  <section class="w-96 md:pl-8 md:pr-8 md:w-screen">
    <form class="flex flex-row justify-between w-full md:justify-center">
      <input class="border shadow w-4/5 p-2 mr-6" type="text" placeholder=" Search by ID" #filter>
      <button class="bg-yellow-400 hover:bg-opacity-50 font-bold py-2 px-4 rounded" type="button" (click)="filterUser(filter.value)">Search</button>
    </form>
  </section>
  <section class="w-96 md:pl-8 md:pr-8 md:w-screen">
    <app-users-list 
    [usersList]="filteredUser"></app-users-list>
  </section>
  `,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  userData: Userdata[] = [];
  userService: UsersService = inject(UsersService);
  filteredUser: Userdata[] = [];

  constructor () {
    this.userData = this.userService.getAllUsers();
    this.filteredUser = this.userData;
  }

  filterUser(id: string) {
    const userId = Number(id);
    if (!userId) {
      this.filteredUser = this.userData;
      return;
    }

    this.filteredUser = this.userData.filter(
      user => user?.id === userId
    );
  }

} 