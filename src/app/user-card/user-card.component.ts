import { Component, Input } from '@angular/core';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  template: `
  <div class="flex flex-row gap-4 md:gap-8 w-full p-2 md:p-4 mt-8 bg-customBlue shadow-md rounded-lg">
    <img
      class="rounded-full border-2 border-gray-300 h-32 w-32" 
      src={{userData.avatar}} 
      alt="profileImage"
    />
    <section class="flex flex-col justify-center">
      <p class="text-gray-100 mt-2">Id: {{userData.id}}</p>
      <p class="text-gray-100 mt-2">First Name: {{userData.firstName}}</p>
      <p class="text-gray-100 mt-2">Last Name: {{userData.lastName}}</p>
      <p class="text-gray-100 mt-2">Email: {{userData.email}}</p>
    </section>
</div>
  `,
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() userData!: Userdata;
}