import { DictionaryAgGridComponent } from './../dictionary-ag-grid/dictionary-ag-grid.component';
import { Component } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';
import { HeroFormService } from '../forms/hero-form.service';

@Component({
  selector: 'app-heroes-ag',
  templateUrl: '../dictionary-ag-grid/dictionary-ag-grid.component.html',
  styleUrls: ['../dictionary-ag-grid/dictionary-ag-grid.component.css'],
  providers:  [HeroFormService]
})
export class HeroesAgComponent extends DictionaryAgGridComponent<Hero> {
  constructor(heroService: HeroService, formProviderService: HeroFormService) {
    super(Hero, heroService, formProviderService)
  }
}
