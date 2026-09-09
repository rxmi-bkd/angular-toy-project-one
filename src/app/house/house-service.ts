import { House } from './house';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  httpClient = inject(HttpClient);

  fetchHouses() {
    return this.httpClient.get<House[]>('http://localhost:3000/locations');
  }

  fetchHouse(id: number) {
    return this.httpClient.get<House>(`http://localhost:3000/locations/${id}`);
  }
}
