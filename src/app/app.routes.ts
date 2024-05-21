import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { BuyMeACoffeeComponent } from './page/buy-me-acoffee/buy-me-acoffee.component';
import { HomeComponent } from './page/home/home.component';
import { TierlistComponent } from './page/tierlist/tierlist.component';

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
    path: 'tier-list',
    component: TierlistComponent,
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
