import { DictionaryComponent } from './../dictionary/dictionary.component';
import { Component } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';
import { HeroFormService } from '../forms/hero-form.service';

@Component({
  selector: 'app-heroes',
  templateUrl: '../dictionary/dictionary.component.html',
  styleUrls: ['../dictionary/dictionary.component.css'],
  providers:  [HeroFormService]
})
export class HeroesComponent extends DictionaryComponent<Hero> {
  constructor(heroService: HeroService, formProviderService: HeroFormService) {
    super(Hero, heroService, formProviderService)
  }
}
