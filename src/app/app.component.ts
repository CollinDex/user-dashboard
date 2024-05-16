import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Observable } from 'rxjs';
import { Userdata } from './userdata';
import { Store } from '@ngrx/store';
import { setUser } from './user.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
  <main class="font-serif bg-gray-200 min-h-screen">   
    <header class="flex flex-row justify-between p-4 bg-gray-300 shadow-md">
      <a [routerLink]="['/']">
        <img src="../assets/logo.svg" alt="Logo" width="150" height="150" aria-hidden="true"/>
      </a>
        <a href="https://github.com/CollinDex" target="_blank">
        <img src="../assets/devicon.png" alt="devicon" width="50" height="50" aria-hidden="true"/>
        </a>
    </header>
    <section class="flex flex-col items-center p-8 w-full">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'user-dashboard';
  private store = inject(Store)
  users:Observable<Userdata[]>;

  constructor(){
    this.users = this.store.select('users');
  }

  update(users:Userdata[]) {
    this.store.dispatch(setUser({users}));
    console.log(this.users);
  }

}