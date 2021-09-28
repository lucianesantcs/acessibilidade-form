import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
// import * as uuid from 'uuid'; //passado para serviço UniqueIdService

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [ { 
      provide: NG_VALUE_ACCESSOR, 
      multi: true,
      useExisting: YesNoButtonGroupComponent
      // useExisting: forwardRef(() => YesNoButtonGroupComponent) //forwardRef() garante que o componente existe antes de chamar
    }]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public id: string = null;
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor(uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group')
    // this.id = `yes-no-button-group-${uuid.v1()}`; //passado para serviço UniqueIdService
  }

  public writeValue(value: string): void {
    this.value = value; // seta o valor padrão no form
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: any): void {
  // public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public activate(value: string): void {
    this.writeValue(value);
  }

  ngOnInit(): void {
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}