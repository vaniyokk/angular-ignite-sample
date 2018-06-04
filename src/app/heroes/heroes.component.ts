import { DictionaryComponent } from './../dictionary/dictionary.component';
import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormProviderService } from '../forms/form-provider.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:  [FormProviderService]
})
export class HeroesComponent extends DictionaryComponent<Hero> {
  constructor(public heroService: HeroService, public formProviderService: FormProviderService) {
    super(Hero, heroService, formProviderService)
  }
}
