import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {CatalogModule} from './catalog/catalog.module';
import {CartModule} from './cart/cart.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        SharedModule.forRoot(),

        CatalogModule,
        CartModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
