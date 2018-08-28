import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommunicatorService} from './services/communicator.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [CommunicatorService]
})

export class CoreModule {}
