import { Component, inject } from '@angular/core';
import { HouseService } from '../../house/house-service';
import { HouseList } from '../house-list/house-list';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [HouseList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  houseService = inject(HouseService);
  houses = toSignal(this.houseService.fetchHouses(), { initialValue: [] });
}
