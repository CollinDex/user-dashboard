import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    UserCardComponent
  ],
  template: `
    <app-user-card></app-user-card>
  `,
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

}
