import { FormProviderService } from './../forms/form-provider.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { IgxDialogComponent } from 'igniteui-angular/main';
import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component';
import { BaseDictionaryModel } from '../hero';

@Component({})
export class DictionaryComponent<T extends BaseDictionaryModel> implements OnInit {

  @ViewChild("form")
  private editOrCreateDialog: IgxDialogComponent;

  @ViewChild("grid")
  private grid: IgxGridComponent;

  private dataModel: T;

  public items: T[];
  public formFields: any[];
  public currentEditing: T = null;
  public dataService: any;
  public formProviderService: any;
  public selectedRow: any;

  constructor(model: { new (): T; }, dataService: any, formProviderService: any) {
      this.dataModel = new model();
      this.dataService = dataService;
      this.formProviderService = formProviderService;
  }

  ngOnInit() {
    this.items = [];
    this.getData();
    this.formFields = this.formProviderService.getHeroFields()
  }

  getData(): void {
    this.dataService.getData()
    .subscribe(items => {
      this.items = items
      console.log(items)
      this.grid.clearSummaryCache();
    });
  }

  create() {
    this.formFields = this.formProviderService.getHeroFields()
    this.editOrCreateDialog.open()
  }

  edit(): void {
    this.dataService.getHero(this.selectedRow.id)
      .subscribe(hero => {
        this.currentEditing = hero;
        this.formFields = this.formProviderService.getHeroFields(hero)
        this.editOrCreateDialog.open()
      });
  }

  handleRowSelection(args) {
    const targetCell = args.cell as IgxGridCellComponent;
    const targetRowID = targetCell.row.rowID;
    this.grid.selectRows([targetRowID], true);
    this.selectedRow = targetRowID;
  }

  delete(): void {
    this.items = this.items.filter(h => h.id !== this.selectedRow.id);
    this.dataService.deleteHero(this.selectedRow.id).subscribe();
    this.selectedRow = null;
  }

  onFormSubmit(item) {
    if(this.currentEditing) {
      Object.assign(this.currentEditing, item);
      this.dataService.update(this.currentEditing as T)
        .subscribe(() => {
          this.getData();
          this.editOrCreateDialog.close();
        })
    } else {
      this.dataService.add(item as T)
        .subscribe(() => {
          this.getData();
          this.editOrCreateDialog.close();
        });
    }
  }


}
