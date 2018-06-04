import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Hero } from '../../models/hero';
import { DictionaryService } from '../../dictionary.service';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { IgxDialogComponent } from 'igniteui-angular/main';
import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component';
import { Relation } from '../relation';
import { BaseDictionaryModel } from '../../models/base';

@Component({
  selector: 'relation-table',
  templateUrl: './relation-table.component.html',
  styleUrls: [ './relation-table.component.css' ]
})
export class RelationTableComponent implements OnInit {

  items: BaseDictionaryModel[];

  @ViewChild("grid")
  private grid2: IgxGridComponent;

  @ViewChild("tableDialog")
  private tableDialog: IgxDialogComponent;

  @Output() selectRelation = new EventEmitter<Relation>();

  constructor(private dataService: DictionaryService) {}

  showSearchTable(): void {
    this.getItems();
    this.tableDialog.open()
  }

  ngOnInit(): void {
    this.items = [];
  }

  getItems(): void {
    this.dataService.getData()
    .subscribe(items => {
      this.items = items;
    });
  }

  handleRowSelection(args) {
    const targetCell = args.cell as IgxGridCellComponent;
    const targetRowID = targetCell.row.rowID;
    this.grid2.selectRows([targetRowID], true);
    this.selectRelation.emit({
      realValue: targetRowID.id,
      displayValue: targetRowID.name
    });
  }
}
