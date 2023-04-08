import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Goods, Hortaliza } from '../models/goods';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent {

  hortaToShow : Hortaliza[]

  constructor(private goods : DataService) {
    this.hortaToShow = this.goods.horta
  }

}
