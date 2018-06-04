import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { Relation } from '../relation';

@Component({
  selector: 'relation-autocomplete',
  templateUrl: './relation-autocomplete.component.html',
  styleUrls: [ './relation-autocomplete.component.css' ]
})
export class RelationAutocompleteComponent implements OnInit {

  private searchTerms = new Subject<string>();
  public heroes$: Observable<Hero[]>;
  public searchBoxText: string;
  @Output() selectRelation = new EventEmitter<Relation>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  onSelect(hero: Hero) {
    this.searchBoxText = '';
    this.selectRelation.emit({
      realValue: hero.id,
      displayValue: hero.name
    });
  }
}
