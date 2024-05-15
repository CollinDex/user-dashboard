import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    UserCardComponent,
    CommonModule
  ],
  template: `
    <app-user-card *ngFor="let userData of usersList" [userData]="userData"></app-user-card>
  `,
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input() usersList!: Userdata[];
  
}
