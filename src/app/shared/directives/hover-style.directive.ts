import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appHoverStyle]'
})

export class HoverStyleDirective {
    @HostBinding('class.hovered')
    private isHovered: boolean;

    @HostListener('mouseenter', ['$event'])
    enter(event: Event) {
        this.isHovered = true;
        console.log('hovered', event.target);
    }

    @HostListener('mouseleave')
    leave() {
        this.isHovered = false;
    }
}
