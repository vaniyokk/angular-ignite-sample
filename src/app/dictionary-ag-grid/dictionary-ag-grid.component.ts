import { DictionaryConfigItem } from './../models/base';
import { HeroFormService } from './../forms/hero-form.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { IgxDialogComponent } from 'igniteui-angular/main';
import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component';
import { BaseDictionaryModel } from '../models/base';

export class DictionaryAgGridComponent<T extends BaseDictionaryModel> implements OnInit {

  @ViewChild("form")
  private editOrCreateDialog: IgxDialogComponent;

  @ViewChild("grid")
  private grid: IgxGridComponent;

  private dataModel: T;
  protected dataService: any;
  protected formProviderService: any;
  private gridApi;
  private gridColumnApi;

  public items: T[];
  public formFields: any[];
  public currentEditing: T = null;
  public selectedRow: any;
  public dictionaryConfig: DictionaryConfigItem[];

  constructor(model: { new (): T; }, dataService: any, formProviderService: any) {
    this.dataModel = new model();
    this.dataService = dataService;
    this.formProviderService = formProviderService;
    this.dictionaryConfig = this.dataModel.getDictionaryConfig();
  }

  ngOnInit() {
    this.items = [];
    this.getData();
    this.formFields = this.formProviderService.getFields()
  }

  getData(): void {
    this.dataService.getData()
    .subscribe(items => {
      this.items = items
    });
  }

  create(): void {
    this.formFields = this.formProviderService.getFields()
    this.editOrCreateDialog.open()
  }

  edit(): void {
    this.dataService.getSingle(this.selectedRow.id)
      .subscribe(hero => {
        this.currentEditing = hero;
        this.formFields = this.formProviderService.getFields(hero)
        this.editOrCreateDialog.open()
      });
  }

  delete(): void {
    this.items = this.items.filter(h => h.id !== this.selectedRow.id);
    this.dataService.delete(this.selectedRow.id).subscribe();
    this.selectedRow = null;
  }

  onRowSelected(event): void {
    this.selectedRow = event.data;
  }

  onFormSubmit(item): void {
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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }
}
