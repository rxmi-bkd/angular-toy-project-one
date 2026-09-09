import {Component, input} from '@angular/core';
import {House} from '../../house/house';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-house-card',
  imports: [
    RouterLink
  ],
  templateUrl: './house-card.html',
  styleUrl: './house-card.css',
})
export class HouseCard {
  house = input.required<House>();
}
