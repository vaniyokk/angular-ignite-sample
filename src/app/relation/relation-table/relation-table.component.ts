import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Observable, Subject } from 'rxjs';


import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { IgxDialogComponent } from 'igniteui-angular/main';
import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component';

@Component({
  selector: 'relation-table',
  templateUrl: './relation-table.component.html',
  styleUrls: [ './relation-table.component.css' ]
})
export class RelationTableComponent implements OnInit {
  heroes: Hero[];

  @ViewChild("grid")
  private grid2: IgxGridComponent;

  @ViewChild("tableDialog")
  private tableDialog: IgxDialogComponent;

  constructor(private heroService: HeroService) {}

  showSearchTable(): void {
    this.getHeroes();
    this.tableDialog.open()
  }

  ngOnInit(): void {
    this.heroes = [];
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      console.log(heroes)
      this.heroes = heroes;
    });
  }

  handleRowSelection(args) {
    const targetCell = args.cell as IgxGridCellComponent;
    const targetRowID = targetCell.row.rowID;
    this.grid2.selectRows([targetRowID], true);
    console.log(`Selected Hero id: ${targetRowID.id}`);
  }
}
