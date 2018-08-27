import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './list/cart.component';
import {ItemComponent} from './item/item.component';
import {HoverStyleDirective} from './item/hover-style.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CartComponent,
        ItemComponent,
        HoverStyleDirective
    ],
    exports: [CartComponent]
})
export class CartModule {}
