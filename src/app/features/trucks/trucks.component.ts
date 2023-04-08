import { Component } from '@angular/core';
import { Services7trucksService } from '../services/services7trucks.service';
import { Trucks } from '../models/trucks';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent {
trucks : Trucks[]

  constructor(private data : Services7trucksService) {
    this.trucks = this.data.getTrucks();
  }

}
