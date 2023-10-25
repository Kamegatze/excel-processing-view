import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[scrollDownDerective]'
})
export class ScrollDownDirective implements OnInit {

    @Output() scrollDown : EventEmitter<void> = new EventEmitter<void>();

    private window!: Window;

    @Input() distanceToTheBottom = 0;

    constructor(private element : ElementRef) { }

    ngOnInit(): void {
        this.window = window;
    }

    @HostListener('window:scroll', ['$event.target'])
    windowScrollDownEvent(event: KeyboardEvent) : void {
        const heightScroll = this.window.document.documentElement.scrollHeight;

        const heightOfElement = this.element.nativeElement.scrollHeight;

        const currentScrolledY = this.window.scrollY;

        const innerHeight = this.window.innerHeight;

        const scrollToBottom = heightOfElement - innerHeight - currentScrolledY + (heightScroll - heightOfElement);

        if(scrollToBottom <= this.distanceToTheBottom) {
            this.scrollDown.emit();
        }
    }
}
