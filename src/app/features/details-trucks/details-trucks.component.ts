import { Component } from '@angular/core';
import { Trucks } from '../models/trucks';
import { ActivatedRoute } from '@angular/router';

import { Services7trucksService } from '../services/services7trucks.service';

@Component({
  selector: 'app-details-trucks',
  templateUrl: './details-trucks.component.html',
  styleUrls: ['./details-trucks.component.scss']
})
export class DetailsTrucksComponent {
  productData! : Trucks;

  constructor(private route : ActivatedRoute, private goods : Services7trucksService) {
    this.route.params.subscribe(params => {
      this.productData = this.goods.getProduct(params['id']);
      console.log(this.productData);
    })
   }
}
