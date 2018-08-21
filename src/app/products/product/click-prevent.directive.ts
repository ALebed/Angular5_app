import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[appClickPrevent]'
})

export class ClickPreventDirective {
    @Output() appClickPrevent = new EventEmitter();

    @HostListener('click', ['$event'])
    onClick(event) {
        event.preventDefault();
        this.appClickPrevent.emit(event);
    }
}
