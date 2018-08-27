import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import {CatalogComponent} from './list/catalog.component';
import {ProductComponent} from './product/product.component';


@NgModule({
    imports: [
        CommonModule,

        SharedModule
    ],
    declarations: [
        CatalogComponent,
        ProductComponent
    ],
    exports: [CatalogComponent]
})
export class CatalogModule {
}
