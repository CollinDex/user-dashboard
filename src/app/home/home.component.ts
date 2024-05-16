import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersService } from '../users.service';
import { RequestData, Userdata } from '../userdata';

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
      <input class="border shadow w-4/5 p-2 mr-6" type="text" placeholder=" Search by ID" (keyup)="getUserById($event)" #filter>
      <button class="bg-yellow-400 hover:bg-opacity-50 font-bold py-2 px-4 rounded" type="button" (click)="filterUser(filter.value)">Search</button>
    </form>
  </section>
  <section class="w-96 md:pl-8 md:pr-8 md:w-screen">
    <ng-container *ngIf="filteredUser.length === 0">
      <div class="bg-green-100 border border-green-400 text-green-700 m-8 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">User not Found</strong>
      </div>      
    </ng-container>
    <app-users-list 
    [usersList]="filteredUser"></app-users-list>
  </section>
  <section class="flex flex-row gap-4 justify-center p-4">
    <img
        class="h-8 w-8 hover:cursor-pointer" 
        src= "../../assets/arrow_left.png"
        alt="profileImage"
        (click)="getPrevPage(pageData.page,pageData.total_pages)"
      />
    <p>{{pageData.page}}</p>
    <img
      class="h-8 w-8 hover:cursor-pointer" 
      src= "../../assets/arrow_right.png"
      alt="profileImage"
      (click)="getNextPage(pageData.page,pageData.total_pages)"
    />
  </section>
  `,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  userData: Userdata[] = [];
  userService: UsersService = inject(UsersService);
  filteredUser: Userdata[] = [];
  pageData: RequestData  = {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages : 0,
    data:[]
  };
  user: Userdata | undefined;


  constructor () {
    this.userService.getAllUsers()
      .then((res) => {
        this.pageData = res;
        return res.data})
      .then((userData: Userdata[]) => {
        this.userData = userData;
        this.filteredUser = userData;
    });
  }

  filterUser(id: string) {
    const userId = Number(id);
    console.log(id);
    if (!userId) {
      this.filteredUser = this.userData;
      return;
    }

    this.filteredUser = this.userData.filter(
      user => user?.id === userId
    );
  }

  getUserById(event:Event) {
    const input = event.target as HTMLInputElement;
    const id = parseInt(input.value);
    if (!id) {
      this.filteredUser = this.userData;
      return;
    }
    this.userService.getUsersById(id)
      .then((userData: Userdata) => {
        this.user = userData;
        if (!userData.id) {
          this.filteredUser = [];  
        } else {
          this.filteredUser = [];
          this.filteredUser.push(userData);
        }
      });
          
    console.log(this.user);
  }

  getPrevPage(page:number, total:number) {
    if (!page) {
      return;
    }
    if (page > 1) {
      this.userService.getPage(--page)
        .then((res) => {
          this.pageData = res;
          return res.data})
        .then((userData: Userdata[]) => {
          this.userData = userData;
          this.filteredUser = userData;
        });
    }    
  }

  getNextPage(page:number, total:number) {
    if (!page) {
      return;
    }
    if (page < total) {
      this.userService.getPage(++page)
        .then((res) => {
          this.pageData = res;
          return res.data})
        .then((userData: Userdata[]) => {
          this.userData = userData;
          this.filteredUser = userData;
        });
    }
  }

} 