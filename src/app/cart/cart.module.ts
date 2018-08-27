import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import {CartComponent} from './list/cart.component';
import {ItemComponent} from './item/item.component';

@NgModule({
    imports: [
        CommonModule,

        SharedModule
    ],
    declarations: [
        CartComponent,
        ItemComponent
    ],
    exports: [CartComponent]
})
export class CartModule {}
