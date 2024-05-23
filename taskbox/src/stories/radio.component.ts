import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-radio',
  imports: [CommonModule],
  template: `<div class="container">
    <input
      [id]="id"
      [name]="radioGroupName"
      type="radio"
      (change)="onChange.emit($event)"
      [class]="classes"
      [value]="defaultValue"
      [style.background-color]="background"
      [style.border-color]="borderColor"
    />
    <label [for]="id">{{ label }}</label>
  </div>`,
  styleUrls: ['./radio.css'],
})
export default class RadioComponent {
  @Input()
  id?: string = '1';

  @Input()
  radioGroupName?: string = 'radioGroup1';

  @Input()
  squared?: boolean = false;

  @Input()
  label?: string = '';

  @Input()
  defaultValue?: boolean = false;

  @Input()
  icon: 'daw' | 'star' | 'plus' | 'circle' | 'triangle' = 'daw';

  @Input()
  background?: string = '#ccc';

  @Input()
  borderColor?: string = '#c1c1c1'

  @Output()
  onChange: EventEmitter<Event> = new EventEmitter<Event>();

  public get classes(): string {
    let mode: string = this.squared ? 'storybook-radio--squared' : 'storybook-radio--rounded';

    if (this.defaultValue) {
      mode += `--checked--${this.icon}`;
    }

    return `storybook-radio ${mode}`;
  }
}
