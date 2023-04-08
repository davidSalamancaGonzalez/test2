import { Component, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product!: any;

  constructor(private data: DataService, private router : Router) {}

  erase(product: string) {
    this.data.deleteProduct(product);
  }

  goTo(product : any, id: number) {

    if(product.truck) {
      this.router.navigate(['trucks/details', id.toString()]);
    } else {
      this.router.navigate(['goods/details', id.toString()]);
    }

  }
}
