import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../house/house-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-details',
  imports: [],
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.css',
})
export class HouseDetails {
  route = inject(ActivatedRoute);
  houseService = inject(HouseService);
  id = Number(this.route.snapshot.params['id']);
  house = toSignal(this.houseService.fetchHouse(this.id), { initialValue: null });
}
