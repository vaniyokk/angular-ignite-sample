import { Component, Input, OnInit, OnChanges, Output, EventEmitter }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { FieldBase }              from '../fields/field-base';
import { FieldControlService }    from '../field-control.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: [ './dynamic-form.component.css' ],
  providers: [ FieldControlService ]
})
export class DynamicFormComponent implements OnChanges {

  @Output() formSubmit = new EventEmitter<any>();
  @Input() fields: FieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private fieldsControlService: FieldControlService) {  }

  ngOnChanges() {
    this.form = this.fieldsControlService.toFormGroup(this.fields);
  }

  onSubmit(event) {
    this.formSubmit.emit(this.form.value);
  }
}
