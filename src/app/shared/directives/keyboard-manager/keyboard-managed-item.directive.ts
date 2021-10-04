import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: '[keyboardManagerItem]'
})

export class KeyboarManagedItemDirective {
    @Output() public focused = new EventEmitter<void>();

    constructor(private element: ElementRef<HTMLElement>) {}

    public focus(): void {
        this.element.nativeElement.focus();
        this.focused.emit();
    }

    public isFocused(): boolean {
        return this.element.nativeElement === document.activeElement;
    }
}