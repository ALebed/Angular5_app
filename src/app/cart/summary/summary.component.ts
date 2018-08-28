import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {CartService} from '../cart.service';
import {CommunicatorService} from '../../core/services/communicator.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})

export class SummaryComponent implements OnInit, OnDestroy {
  private subCatalog: Subscription;
  private subCartItemChange: Subscription;
  totalPrice: number;

  constructor(private cartService: CartService,
              private communicatorService: CommunicatorService) { }

  ngOnInit() {
      this.updateTotalPrice();
      this.subCatalog = this.communicatorService.catalogChannel$.subscribe(() => this.updateTotalPrice());
      this.subCartItemChange = this.communicatorService.cartItemChangeChannel$.subscribe(() => this.updateTotalPrice());
  }

  ngOnDestroy() {
    this.subCatalog.unsubscribe();
    this.subCartItemChange.unsubscribe();
  }

  updateTotalPrice() {
      this.totalPrice = this.cartService.getTotalPrice();
  }
}
