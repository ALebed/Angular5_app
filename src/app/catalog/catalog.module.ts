import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogComponent} from './list/catalog.component';
import {ProductComponent} from './product/product.component';

import {ClickPreventDirective} from './product/click-prevent.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CatalogComponent,
        ProductComponent,
        ClickPreventDirective
    ],
    exports: [CatalogComponent]
})
export class CatalogModule {
}
