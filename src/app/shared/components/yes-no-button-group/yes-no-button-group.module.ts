import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';



@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [YesNoButtonGroupComponent]
})
export class YesNoButtonGroupModule { }
