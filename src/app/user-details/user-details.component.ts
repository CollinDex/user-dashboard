import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <a [routerLink]="['/']">
    <img
      class="h-8 w-8" 
      src= "../../assets/arrow.png"
      alt="profileImage"
    />
    </a>
    <section>
      <div class="flex flex-col md:flex-row items-center w-80 p-2 pt-4 gap-2 sm:gap-4 md:gap-8 md:w-full md:p-4 mt-8 bg-customBlue shadow-md rounded-lg">
        <img
          class="rounded-full border-2 border-gray-300 h-36 w-36 md:h-56 md:w-56 lg:h-72 lg:w-72" 
          src={{user?.avatar}} 
          alt="profileImage"
        />
        <section class="flex flex-col justify-center pb-4">
          <p class="text-gray-100 mt-2">Id: {{user?.id}}</p>
          <p class="text-gray-100 mt-2">First Name: {{user?.firstName}}</p>
          <p class="text-gray-100 mt-2">Last Name: {{user?.lastName}}</p>
          <p class="text-gray-100 mt-2">Email: {{user?.email}}</p>
        </section>
      </div>
    </section>
  `,
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UsersService);
  user: Userdata | undefined;

    constructor() {
        const userId = Number(this.route.snapshot.params['id']);
        this.user = this.userService.getUsersById(userId);
    }
}

/* <div class="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8 w-80 md:w-full p-2 md:p-4 mt-8 bg-customBlue shadow-md rounded-lg"> */