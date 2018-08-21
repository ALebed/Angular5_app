import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {ListModule} from './products/products.module';
import {CartModule} from './cart/cart.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        ListModule,
        CartModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
