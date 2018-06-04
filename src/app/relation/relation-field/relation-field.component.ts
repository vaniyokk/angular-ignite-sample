import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { Relation } from '../relation';

type RelationSearchMode = 'autocomplete' | 'table';
@Component({
  selector: 'relation-input',
  templateUrl: './relation-field.component.html',
  styleUrls: [ './relation-field.component.css' ]
})
export class RelationFieldComponent {

  @Input()
  public mode: RelationSearchMode = 'autocomplete';
  public selected: Relation = null;

  constructor() {}

  public onSelectRelation(value: Relation): void {
    this.selected = value;
  }

  public reset(): void {
    this.selected = null;
  }
}
