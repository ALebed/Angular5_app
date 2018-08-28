import {NgModule} from '@angular/core';
import {HoverStyleDirective} from './directives/hover-style.directive';
import {ClickPreventDirective} from './directives/click-prevent.directive';

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

export class SharedModule {}
