import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { IgxDialogComponent } from 'igniteui-angular/main';
import { FormProviderService } from '../forms/form-provider.service';
import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:  [FormProviderService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  @ViewChild("form")
  private editOrCreateDialog: IgxDialogComponent;

  @ViewChild("grid")
  private grid: IgxGridComponent;

  public formFields: any[];
  public currentEditing: Hero = null;
  public selectedRow: any;

  constructor(private heroService: HeroService, private formProviderService: FormProviderService) { }

  ngOnInit() {
    this.heroes = [];
    this.getHeroes();
    this.formFields = this.formProviderService.getHeroFields()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes
      this.grid.clearSummaryCache();
    });
  }

  delete(): void {
    this.heroes = this.heroes.filter(h => h.id !== this.selectedRow.id);
    this.heroService.deleteHero(this.selectedRow.id).subscribe();
    this.selectedRow = null;
  }

  edit(): void {
    this.heroService.getHero(this.selectedRow.id)
      .subscribe(hero => {
        this.currentEditing = hero;
        this.formFields = this.formProviderService.getHeroFields(hero)
        this.editOrCreateDialog.open()
      });
  }

  create() {
    this.formFields = this.formProviderService.getHeroFields()
    this.editOrCreateDialog.open()
  }

  handleRowSelection(args) {
    const targetCell = args.cell as IgxGridCellComponent;
    const targetRowID = targetCell.row.rowID;
    console.log(this.grid.selectedRows());
    this.grid.selectRows([targetRowID], true);
    this.selectedRow = targetRowID;
  }

  onHeroUpdate(hero) {
    if(this.currentEditing) {
      Object.assign(this.currentEditing, hero);
      this.heroService.updateHero(this.currentEditing as Hero)
        .subscribe(() => {
          this.getHeroes();
          this.editOrCreateDialog.close();
        })
    } else {
      this.heroService.addHero(hero as Hero)
        .subscribe(() => {
          this.getHeroes();
          this.editOrCreateDialog.close();
        });
    }
  }
}
