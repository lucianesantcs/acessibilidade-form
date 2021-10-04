import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboarManagedItemDirective } from "./keyboard-managed-item.directive";

@Directive({
    selector: '[keyboardManager]'
})

export class KeyboarManagerDirective {
    @ContentChildren(KeyboarManagedItemDirective) public items: QueryList<KeyboarManagedItemDirective>;
    @HostListener('keyup', ['$event'])

    public manageKeys(event: KeyboardEvent): void {
        switch(event.key) {
            case 'ArrowRight':
                this.moveFocus(ArrowDirection.RIGHT).focus();
                break;
            case 'ArrowLeft':
                this.moveFocus(ArrowDirection.LEFT).focus();
                break;
            case 'ArrowUp':
                this.moveFocus(ArrowDirection.RIGHT).focus();
                break;
            case 'ArrowDown':
                this.moveFocus(ArrowDirection.LEFT).focus();
                break;
        }
    }

    public moveFocus(directon: ArrowDirection): KeyboarManagedItemDirective {
        const items = this.items.toArray();
        const currentSelectedIndex = items.findIndex(item => item.isFocused());
        const targetElementFocus = items[currentSelectedIndex + directon];

        if(targetElementFocus) {
            return targetElementFocus;
        }

        return directon === ArrowDirection.LEFT ? items[items.length - 1] : items[0]
    }
}

enum ArrowDirection {
    LEFT = -1,
    RIGHT = 1
}