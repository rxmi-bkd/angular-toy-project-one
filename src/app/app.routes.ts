import {Routes} from '@angular/router';
import { Home } from "./home-page/home/home";
import {HouseDetails} from './house-details-page/house-details/house-details.component';

export const routes: Routes = [
  {
    path: '', component: Home, title: 'Home',
  },
  {
    path: 'details/:id', component: HouseDetails, title: 'HouseDetails',
  }
];
