import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import {CartComponent} from './cart.component';
import {CartListComponent} from './list/cart-list.component';
import {CartItemComponent} from './item/cart-item.component';
import {SummaryComponent} from './summary/summary.component';

@NgModule({
    imports: [
        CommonModule,

        SharedModule
    ],
    declarations: [
        CartComponent,
        CartItemComponent,
        CartListComponent,
        SummaryComponent
    ],
    exports: [CartComponent]
})
export class CartModule {}
