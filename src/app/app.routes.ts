import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: UserDetailsComponent,
        title: 'Home details'
    }
];
