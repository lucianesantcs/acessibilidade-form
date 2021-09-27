import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOptions;

  constructor() { }

  public activate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }

  ngOnInit(): void {
  }

}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}