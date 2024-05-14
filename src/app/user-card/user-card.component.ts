import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  template: `
  <div class="flex flex-row gap-4 md:gap-8 w-full p-2 md:p-4 mt-8 bg-customBlue shadow-md rounded-lg">
    <img
      class="rounded-full border-2 border-gray-300 h-32 w-32" 
      src="https://reqres.in/img/faces/1-image.jpg" 
      alt="profileImage"
    />
    <section class="flex flex-col justify-center">
      <p class="text-gray-100 mt-2">Id:</p>
      <p class="text-gray-100 mt-2">First Name:</p>
      <p class="text-gray-100 mt-2">Last Name:</p>
      <p class="text-gray-100 mt-2">Email:</p>
    </section>
</div>
  `,
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

}