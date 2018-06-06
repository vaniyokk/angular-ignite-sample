import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../../models/hero';
import { RelationService } from '../relation.service';
import { Relation } from '../relation';
import { BaseDictionaryModel, BaseDataModel } from '../../models/base';

@Component({
  selector: 'relation-autocomplete',
  templateUrl: './relation-autocomplete.component.html',
  providers: [ RelationService ],
  styleUrls: [ './relation-autocomplete.component.css' ]
})
export class RelationAutocompleteComponent implements OnInit {

  @Input() dataModel: BaseDataModel = null;
  @Output() selectRelation = new EventEmitter<Relation>();

  private searchTerms = new Subject<string>();
  public items$: Observable<BaseDictionaryModel[]>;
  public searchBoxText: string;


  constructor(private dataService: RelationService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dataService.search(this.dataModel, term)),
    );
  }

  onSelect(item: BaseDictionaryModel) {
    this.searchBoxText = '';
    this.selectRelation.emit({
      realValue: item.id,
      displayValue: item.name
    });
  }
}
