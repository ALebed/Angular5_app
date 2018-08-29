import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appClickStyle]'
})

export class ClickStyleDirective {
    @Input()
    color: string;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('mousedown')
    onMouseDown() {
        this.highlight(this.color || '#f8f9fa');
    }

    @HostListener('mouseup')
    onMouseUp() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
