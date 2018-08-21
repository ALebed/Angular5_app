import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  productList: Array<Product>;

  constructor(private listService: ListService) {

  }

  ngOnInit() {
      this.productList = this.listService.getProducts();
  }

  onBuy(id: number): void {
    console.log(`Product number ${id} added to cart`);
  }
}
