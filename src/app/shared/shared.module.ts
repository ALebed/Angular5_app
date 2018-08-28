import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HoverStyleDirective} from './directives/hover-style.directive';
import {ClickPreventDirective} from './directives/click-prevent.directive';

@NgModule({
    imports: [
        CommonModule
    ],
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
