import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FieldBase }     from '../fields/field-base';

@Component({
  selector: 'form-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent {
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}
