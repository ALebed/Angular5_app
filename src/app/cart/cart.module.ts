import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import {CartComponent} from './list/cart.component';
import {ItemComponent} from './item/item.component';
import {SummaryComponent} from './summary/summary.component';

@NgModule({
    imports: [
        CommonModule,

        SharedModule
    ],
    declarations: [
        CartComponent,
        ItemComponent,
        SummaryComponent
    ],
    exports: [CartComponent]
})
export class CartModule {}
