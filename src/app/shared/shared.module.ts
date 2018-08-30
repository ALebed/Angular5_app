import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HoverStyleDirective} from './directives/hover-style.directive';
import {ClickPreventDirective} from './directives/click-prevent.directive';
import {ClickStyleDirective} from './directives/click-style.directive';

@NgModule({
    imports: [
        CommonModule
    ],
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
