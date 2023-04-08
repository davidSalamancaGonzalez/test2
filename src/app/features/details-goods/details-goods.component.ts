import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Hortaliza } from '../models/goods';

@Component({
  selector: 'app-details-goods',
  templateUrl: './details-goods.component.html',
  styleUrls: ['./details-goods.component.scss']
})
export class DetailsGoodsComponent {

  productData! : Hortaliza;

  constructor(private route : ActivatedRoute, private goods : DataService) {
    this.route.params.subscribe(params => {
      this.productData = this.goods.getProduct(params['id']);
      console.log(this.productData);
    })
   }

}
