import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListComponent} from './list/list.component';
import {ProductComponent} from './product/product.component';

import {ListService} from './products.service';
import {ClickPreventDirective} from './product/click-prevent.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ListComponent,
        ProductComponent,
        ClickPreventDirective
    ],
    providers: [ListService],
    exports: [ListComponent]
})
export class ListModule {
}
