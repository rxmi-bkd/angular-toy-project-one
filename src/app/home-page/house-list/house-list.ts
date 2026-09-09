import {Component, computed, input, signal} from '@angular/core';
import {House} from '../../house/house';
import {HouseCard} from '../house-card/house-card';
import {form, FormField} from '@angular/forms/signals';

@Component({
  selector: 'app-house-list',
  imports: [HouseCard, FormField],
  templateUrl: './house-list.html',
  styleUrl: './house-list.css',
})
export class HouseList {

  houses = input.required<House[]>();
  initialValues = {city: ''}
  searchModel = signal(this.initialValues)
  searchForm = form(this.searchModel);
  filteredHouses = computed(() => this.filterHouses());

  filterHouses() {
    const city = this.searchForm.city().value().toLowerCase().trim();
    if (!city) return this.houses();
    return this.houses().filter(house => house.city.toLowerCase().includes(city));
  }
}
