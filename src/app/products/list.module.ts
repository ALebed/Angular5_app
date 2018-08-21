import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListComponent} from './list/list.component';
import {ProductComponent} from './product/product.component';

import {ListService} from './list.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ListComponent,
        ProductComponent
    ],
    providers: [ListService],
    exports: [ListComponent]
})
export class ListModule {
}
