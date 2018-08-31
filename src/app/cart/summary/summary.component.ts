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
  totalNumber: number;

  constructor(private cartService: CartService,
              private communicatorService: CommunicatorService) { }

  ngOnInit() {
      this.updateSummary();
      this.subCatalog = this.communicatorService.catalogProductAddChannel$.subscribe(() => this.updateSummary());
      this.subCartItemChange = this.communicatorService.cartItemChangeChannel$.subscribe(() => this.updateSummary());
  }

  ngOnDestroy() {
    this.subCatalog.unsubscribe();
    this.subCartItemChange.unsubscribe();
  }

  updateSummary() {
      this.updateTotalPrice();
      this.updateTotalNumber();
  }

  updateTotalPrice() {
      this.totalPrice = this.cartService.getTotalPrice();
  }

  updateTotalNumber() {
      this.totalNumber = this.cartService.getTotalNumber();
  }
}
