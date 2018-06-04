import { Injectable }       from '@angular/core';

import { FieldDropdown } from './fields/field-dropdown';
import { FieldBase }     from './fields/field-base';
import { FieldTextbox }  from './fields/field-textbox';
import { Hero } from '../models/hero';

@Injectable()
export class HeroFormService {

  getFields(hero?: Hero): FieldBase<any>[] {

    let fields: FieldBase<any>[] = [

      new FieldDropdown({
        key: 'age',
        label: 'Age',
        value: hero ? hero.age : 11,
        options: [
          {key: '11', value: 11},
          {key: '12', value: 12},
          {key: '13', value: 13},
          {key: '14', value: 14},
          {key: '15', value: 15},
          {key: '16', value: 16},
          {key: '17', value: 17},
          {key: '18', value: 18},
          {key: '19', value: 19},
          {key: '20', value: 20}
        ],
        order: 3
      }),

      new FieldTextbox({
        key: 'name',
        label: 'Name',
        value: hero ? hero.name : '',
        required: true,
        order: 1
      }),

      new FieldTextbox({
        key: 'email',
        value: hero ? hero.email : '',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      })
    ];

    return fields.sort((a, b) => a.order - b.order);
  }
}
