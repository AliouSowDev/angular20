import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { App } from './app';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    }
];
