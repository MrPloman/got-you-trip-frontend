import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
  inject,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { combineLatest } from 'rxjs';
import { AnswerOption } from 'src/app/shared/models/answer-options.model';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),

      multi: true,
    },
  ],
})
export class InputSelectComponent implements ControlValueAccessor, OnInit {
  @Input() public class = '';
  @Input() public label = '';
  @Input() public id = '';
  @Input() public width = '100%';
  @Input() public disabled = false;
  @Input() public required = false;
  @Input() public options: AnswerOption[] = [];
  @Input() public formGroup!: FormGroup;
  @Input() public formControlName!: string;
  @Input() public errorMessage = '';

  public readonly valueControl = new FormControl('');
  ngOnInit(): void {
    combineLatest([this.valueControl.valueChanges]).subscribe(() => {
      const value = this._getValue();
      this._onChange(value);
    });
    if (this.required) this.valueControl.addValidators([Validators.required]);
  }
  public writeValue(value: string | null): void {
    if (typeof value === 'string' && value) {
      const _value = value;
      this.valueControl.setValue(_value);
    } else {
      this.valueControl.setValue(null);
    }
  }
  private _getValue(): string | null {
    try {
      if (this.valueControl.invalid) return null;
      const value = this.valueControl.value;
      return value;
    } catch {
      // Return null if something throws
      return null;
    }
  }
  // On change section
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private _onChange = (_value: string | null): void => undefined;
  public registerOnChange(fn: (value: string | null) => void): void {
    this._onChange = fn;
  }
  // On touched section
  public onTouched = (): void => undefined;
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.valueControl.disable();
    } else {
      this.valueControl.enable();
    }
  }
  public removeValue() {
    this.writeValue(null);
  }
}
