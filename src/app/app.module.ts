import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {CatalogModule} from './catalog/catalog.module';
import {CartModule} from './cart/cart.module';
import {CommunicatorService} from './communicator.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        CatalogModule,
        CartModule
    ],
    providers: [CommunicatorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
