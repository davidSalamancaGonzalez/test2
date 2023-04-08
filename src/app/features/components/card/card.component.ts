import { Component, Input } from '@angular/core';
import { Hortaliza } from '../../models/goods';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product!: Hortaliza;

  constructor(private data: DataService, private router : Router) {}

  erase(product: string) {
    this.data.deleteProduct(product);
  }

  goTo(id: number) {

    this.router.navigate(['goods/details', id.toString()]);
  }
}
