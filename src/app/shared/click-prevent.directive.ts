import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[click.prevent]'
})

export class ClickPreventDirective {
    // tslint:disable-next-line:no-output-rename
    @Output('click.prevent') clickPreventEvent = new EventEmitter();

    @HostListener('click', ['$event'])
    onClick(event) {
        event.preventDefault();
        this.clickPreventEvent.emit(event);
    }
}
