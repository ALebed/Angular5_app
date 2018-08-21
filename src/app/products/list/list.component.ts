import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';
import { ListService } from '../products.service';

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

  onBuy(product: Product): void {
    console.log(`Product number ${product.id} added to cart`);
    console.log(`Product name ${product.name} added to cart`);
  }
}
