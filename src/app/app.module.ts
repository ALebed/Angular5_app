import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {CoreModule} from './core/core.module';

import {CatalogModule} from './catalog/catalog.module';
import {CartModule} from './cart/cart.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        CoreModule,

        CatalogModule,
        CartModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
