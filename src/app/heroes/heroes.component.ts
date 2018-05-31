import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { IgxDialogComponent } from 'igniteui-angular/main';
import { FormProviderService } from '../forms/form-provider.service';

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

  constructor(private heroService: HeroService, private formProviderService: FormProviderService) { }

  ngOnInit() {
    this.getHeroes();
    this.formFields = this.formProviderService.getHeroFields()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: number): void {
    this.heroes = this.heroes.filter(h => h.id !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  edit(id: number): void {
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.currentEditing = hero;
        this.formFields = this.formProviderService.getHeroFields(hero)
        this.editOrCreateDialog.open()
      });
  }

  create() {
    this.editOrCreateDialog.open()
  }

  onHeroUpdate(hero) {
    if(this.currentEditing) {
      Object.assign(this.currentEditing, hero);
      this.heroService.updateHero(this.currentEditing as Hero)
        .subscribe(() => {
          this.getHeroes();
          this.currentEditing = null;
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
