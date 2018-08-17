import { Component, OnInit } from '@angular/core';

enum Categories {
  Shoes = "Shoes",
  Accessories = "Accessories"
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  name: string = "First product";
  description: string = "The very first product added on a page";
  price: number = 300;
  isAvailable: boolean = true;
  category: Categories = Categories.Shoes;
  onBuy() {
    console.log('click')
  }

  constructor() {

  }

  ngOnInit() {
  }
}
