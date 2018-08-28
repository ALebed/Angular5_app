import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

    @ViewChild('appTitle')
    titleElement: ElementRef;

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        (<HTMLHeadingElement>this.titleElement.nativeElement).innerHTML = 'Angular Shop Project';
    }
}
