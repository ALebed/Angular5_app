import {NgModule} from '@angular/core';
import {HoverStyleDirective} from './directives/hover-style.directive';
import {ClickPreventDirective} from './directives/click-prevent.directive';
import {ClickStyleDirective} from './directives/click-style.directive';

@NgModule({
    declarations: [
        HoverStyleDirective,
        ClickPreventDirective,
        ClickStyleDirective
    ],
    exports: [
        HoverStyleDirective,
        ClickPreventDirective,
        ClickStyleDirective
    ]
})

export class SharedModule {}
