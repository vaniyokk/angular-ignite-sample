import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { IgxDialogComponent } from 'igniteui-angular/main';
import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component';

type RelationSearchMode = 'autocomplete' | 'table';
@Component({
  selector: 'relation-input',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  heroes: Hero[];
  private searchTerms = new Subject<string>();
  public searchBoxText: string;

  @Input()
  public mode: RelationSearchMode = 'autocomplete';

  @ViewChild("grid")
  private grid2: IgxGridComponent;

  @ViewChild("tableDialog")
  private tableDialog: IgxDialogComponent;

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  showSearchTable(): void {
    this.getHeroes();
    this.tableDialog.open()
  }

  ngOnInit(): void {
    this.heroes = [];
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      console.log(heroes)
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero) {
    console.log(`Selected Hero id: ${hero.id}`);
    this.searchBoxText = '';
  }

  handleRowSelection(args) {
    const targetCell = args.cell as IgxGridCellComponent;
    const targetRowID = targetCell.row.rowID;
    this.grid2.selectRows([targetRowID], true);
    console.log(`Selected Hero id: ${targetRowID.id}`);
  }
}
