import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent
  ],
  template: `
  <main class="font-serif bg-gray-200">
    <header class="flex flex-row justify-between p-4 bg-gray-300 shadow-md">
      <img src="../assets/logo.svg" alt="Logo" width="150" height="150" aria-hidden="true"/>
      <a href="https://github.com/CollinDex">
      <img src="../assets/devicon.png" alt="devicon" width="50" height="50" aria-hidden="true"/>
      </a>
    </header>
    <section class="flex flex-col items-center p-8 w-full">
      <app-home></app-home>
    </section>
  </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'user-dashboard';
}