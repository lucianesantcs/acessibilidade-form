import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DisabledControlDirective } from "./disabled-control.directive";
@NgModule({
    declarations: [DisabledControlDirective],
    imports: [CommonModule],
    exports: [DisabledControlDirective]
})

export class DisabledControlModule {

}