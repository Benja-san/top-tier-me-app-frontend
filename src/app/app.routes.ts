import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { BuyMeACoffeeComponent } from './page/buy-me-acoffee/buy-me-acoffee.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'buy-me-a-coffee',
    component: BuyMeACoffeeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
