import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KeyboarManagedItemDirective } from "./keyboard-managed-item.directive";
import { KeyboarManagerDirective } from "./keyboard-manager.directive";

@NgModule({
    declarations: [KeyboarManagerDirective, KeyboarManagedItemDirective],
    imports: [CommonModule],
    exports: [KeyboarManagerDirective, KeyboarManagedItemDirective]
})

export class KeyboarManagerModule {

}