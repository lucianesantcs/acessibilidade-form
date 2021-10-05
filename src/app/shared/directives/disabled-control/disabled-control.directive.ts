import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { NgControl } from "@angular/forms";
@Directive({
    selector: '[disabledControl]'
})

export class DisabledControlDirective implements OnChanges {
    @Input() disabledControl = false;

    constructor(private ngControl: NgControl) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if(changes.disabledControl) {
            const action = this.disabledControl ? 'disable' : 'enable';
            this.ngControl.control[action]();
        }
    }
}