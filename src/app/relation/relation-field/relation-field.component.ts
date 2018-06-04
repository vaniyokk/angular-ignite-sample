import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../../hero';

type RelationSearchMode = 'autocomplete' | 'table';
@Component({
  selector: 'relation-input',
  templateUrl: './relation-field.component.html',
  styleUrls: [ './relation-field.component.css' ]
})
export class RelationFieldComponent {
  heroes: Hero[];

  @Input()
  public mode: RelationSearchMode = 'autocomplete';

  constructor() {}
}
