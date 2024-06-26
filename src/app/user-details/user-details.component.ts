import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Userdata } from '../userdata';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterLink,
    SpinnerComponent,
    CommonModule
  ],
  template: `
    <a [routerLink]="['/']">
    <img
      class="h-8 w-8" 
      src= "../../assets/arrow.png"
      alt="profileImage"
    />
    </a>
    <app-spinner *ngIf="loading === true" ></app-spinner>
    <section *ngIf="loading === false">
      <div class="flex flex-col md:flex-row items-center w-80 p-2 pt-4 gap-2 sm:gap-4 md:gap-8 md:w-full md:p-4 mt-8 bg-customBlue shadow-md rounded-lg">
        <img
          class="rounded-full border-2 border-gray-300 h-36 w-36 md:h-56 md:w-56 lg:h-72 lg:w-72" 
          src={{user?.avatar}} 
          alt="profileImage"
        />
        <section class="flex flex-col justify-center pb-4">
          <p class="text-gray-100 mt-2">Id: {{user?.id}}</p>
          <p class="text-gray-100 mt-2">First Name: {{user?.first_name}}</p>
          <p class="text-gray-100 mt-2">Last Name: {{user?.last_name}}</p>
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
  loading: boolean = false;

    constructor() {
        const userId = parseInt(this.route.snapshot.params['id'], 10);
        this.loading = true;
        this.userService.getUsersById(userId)
          .then((userData: Userdata | undefined) => {
            this.user = userData;
            this.loading= false;
          });
    }
}