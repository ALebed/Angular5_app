import {NgModule, ModuleWithProviders} from '@angular/core';
import {HoverStyleDirective} from './hover-style.directive';
import {CommunicatorService} from './communicator.service';
import {ClickPreventDirective} from './click-prevent.directive';

@NgModule({
    declarations: [
        HoverStyleDirective,
        ClickPreventDirective
    ],
    exports: [
        HoverStyleDirective,
        ClickPreventDirective
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [CommunicatorService]
        };
    }
}
